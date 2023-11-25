import React, { useEffect, useState } from 'react'
import bgImage from "../assets/DashboardViewBG.jpg"
import bgImage2 from "../assets/DashboardViewBG2.jpg"
import cats from '../data'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import Activity from './Activity';


const CatWeightChart = ({ cat }) => {
  const chartData = {
    labels: cat.weight.map((data) => data.date),
    datasets: [
      {
        label: "Weight",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: cat.weight.map((data) => data.weight),
      },
    ],
  };

  const config = {
    type: 'line',
    data: chartData,
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      },
      elements: {
        line: {
          tension: 0.5,
          borderJoinStyle: 'round'
        },
      }
    }
  };

  return (
    <div>
      <Line data={chartData} options={config} />
    </div>
  );
};


const DashboardView = ({ catId }) => {

  const [selectedCat, setSelectedCat] = useState(cats[catId])
  const [birthday, setBirthDay] = useState('')

  useEffect(() => {
    console.log("catId, selectedCat = ",catId, selectedCat)
    setSelectedCat(cats[catId])
  })

  

  const monthArr = [
    { monthNo: 1, monthName: "Jan", },
    { monthNo: 2, monthName: "Feb", },
    { monthNo: 3, monthName: "Mar", },
    { monthNo: 4, monthName: "Apr", },
    { monthNo: 5, monthName: "May", },
    { monthNo: 6, monthName: "June", },
    { monthNo: 7, monthName: "July", },
    { monthNo: 8, monthName: "Aug", },
    { monthNo: 9, monthName: "Sep", },
    { monthNo: 10, monthName: "Oct", },
    { monthNo: 11, monthName: "Nov", },
    { monthNo: 12, monthName: "Dec", },

  ]


  useEffect(() => {
    let bdayArr = selectedCat?.birthday?.split("-")
    let bdayMonth = selectedCat?.birthday?.split("-")[1]
    let val = monthArr.filter((month) => month.monthNo == bdayMonth)
    let monthName = val[0]?.monthName
    if (monthName) {
      let bdayString = `${bdayArr[2]} ${monthName} ${bdayArr[0]}`
      setBirthDay(bdayString)
    }
  })

  return (
    <div className='container w-full min-h-screen'>
      <div className='inner-container w-full min-h-screen'>
        <div className='image-container flex w-full min-h-screen bg-no-repeat 
          bg-cover items-center justify-center'
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${bgImage2})`,
            width: "100%", height: "100%", objectFit: "cover"
          }}>

          <div className='internal-left w-3/5 flex flex-col justify-start items-start p-14 h-screen'>

            <div className='top-part w-full h-3/5 '>
              <div className='stats text-4xl font-normal opacity-80 flex justify-start pb-6 tracking-wider'>Stats</div>

              <div className='chart-container'>
                {selectedCat && <CatWeightChart cat={selectedCat} />}
              </div>
            </div>

            <div className='bottom-part h-2/5 w-full'>
              <div className='basic-info flex justify-start mt-5 mb-6 text-xs font-medium tracking-widest '>BASIC INFORMATION</div>

              <div className='basic-info-square w-full'>

                <div className='row-1 flex w-full'>
                  <div className='breed w-1/2 flex flex-col justify-center items-start  min-h-[6rem]' style={{ borderBottom: "1px solid rgba(0,0,0,0.2)", borderRight: "1px solid rgba(0,0,0,0.2)" }}>
                    <div className='header font-normal text-base text-gray-400'>Breed</div>
                    <div className='header-value text-2xl tracking-wider text-gray-500 capitalize'>{selectedCat?.breed}</div>
                  </div>

                  <div className='color w-1/2 flex flex-col justify-start items-center min-h-[6rem]' style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}>
                    <div className='flex flex-col justify-center items-start'>
                      <div className='header font-normal text-base text-gray-400'>Color</div>
                      <div className='header-value text-2xl tracking-wider text-gray-500 capitalize'>{selectedCat?.color}</div>
                    </div>
                  </div>
                </div>

                <div className='row-2 flex'>
                  <div className='birthdate w-1/2 flex flex-col justify-center items-start  min-h-[6rem]' style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}>
                    <div className='header font-normal text-base text-gray-400'>Birthdate</div>
                    <div className='header-value text-2xl tracking-wider text-gray-500 '>{birthday}</div>
                  </div>

                  <div className='gender w-1/2 flex flex-col justify-center items-center  min-h-[6rem]' >
                    <div className='flex flex-col justify-center items-start'>
                      <div className='header font-normal text-base text-gray-400'>Gender</div>
                      <div className='header-value text-2xl tracking-wider text-gray-500 capitalize'>{selectedCat?.gender}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='internal-right w-2/5'>

            <div className='activity'>
              <Activity selectedCat={selectedCat}/>
            </div>

            <div className='all-activity-container'></div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default DashboardView