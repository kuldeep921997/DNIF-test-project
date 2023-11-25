import React, { Component } from 'react'

class Activity extends Component {

    constructor(props) {
        super(props)

        

        let activity = this.props.selectedCat?.activity.map((item) => {return item.task})
        let timings = this.props.selectedCat?.activity.map((item) => {return item.date})
        console.log("timings = ",timings)
        
        let inputList = ["red", "pink", "blue", "green"]
        if (inputList.length < 2) {
            console.error("Input list should have at least two elements");
            return;
        }

        let result = [];
        let lastIndex = -1;

        for (let i = 0; i < activity.length; i++) {
            let availableIndices = inputList
                .map((_, index) => index)
                .filter(index => index !== lastIndex);

            if (availableIndices.length === 0) {
                console.error("No available indices. Check the input list.");
                return;
            }

            let randomIndex =
                availableIndices[Math.floor(Math.random() * availableIndices.length)];

            result.push(inputList[randomIndex]);
            lastIndex = randomIndex;
        }

        this.state = {
            pointColor: result,
            activity,
            timings,
        }
    }

    render() {
        return (
            <div className='container w-full h-screen pt-14 p-4'>
                <div className='inner-container w-full h-full'>
                    <div className='stats text-4xl font-normal opacity-80 flex justify-start pb-6 items-start mb-5 tracking-wider'>Activity</div>

                    {this.state.activity.map((pointItem, index) => (
                        <div className='cpvl-points flex items-start w-3/5 h-auto' key={index} style={{ minHeight: "6rem" }}>

                            <div className={`flex flex-col ${index <= this.state.pointColor.length - 1 ? "justify-start" : "justify-center"} items-center mr-4`} style={{ minHeight: "6rem", height: "max-containt" }}>
                                <div className='point w-3 h-3 rounded-full bg-white flex items-start' style={{ border: `3.4px solid ${this.state.pointColor[index]}` }}></div>
                                {index <= this.state.pointColor.length - 2 &&
                                    <div style={{ border: "0.5px solid rgba(0,0,0,0.2)", minHeight: "6rem" }}></div>}
                            </div>

                            <div className='flex flex-col items-start -mt-1 mb-4' style={{ minHeight: "6rem" }}>
                                <div className='text-[13px] font-medium text-gray-400 mb-1'>{this.state.timings[index]}</div>
                                <div className='activity flex items-start w-56 justify-start text-sm font-medium opacity-80 text-gray-600' style={{ textAlign: "justify" }}>{pointItem}</div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>


        )
    }
}

export default Activity