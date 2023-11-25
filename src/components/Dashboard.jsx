import React, { useEffect, useState } from 'react'
import CatImg from './CatImg'

import Home from "../assets/icons/home.png"
import Medical from "../assets/icons/medical.png"
import Page from "../assets/icons/page.png"
import Community from "../assets/icons/community.png"
import FourSquares from "../assets/icons/fourSquares.png"
import DashboardView from './DashboardView'
import MedicalView from "./MedicalView"
import AppointmentView from "./AppointmentView"
import CommunityView from "./CommunityView"
import MoreView from "./MoreView"
import Logout from './Logout'
import { useNavigate } from 'react-router-dom'


// import { login, logout } from '../features/login/loginSlice'
// import { useSelector, useDispatch } from 'react-redux' 

const Dashboard = () => {

    // const loginVal = useSelector((state) => state.loginStatus.loginstatus);
    // const dispatch = useDispatch();
    // console.log("loginVal = ", loginVal)

    const navigate = useNavigate();
    
    useEffect(() => {
        let isLogin = localStorage.getItem("isLogin")
        console.log("isLogin = ", isLogin)

        if(isLogin == "false" || !isLogin){
            // dispatch(logout())
            console.log("passing to login page")
            navigate("/")
        }
    })

    const [selectedMenuItem, setSelectedMenuItem] = useState(1)
    const [catId, setCatId] = useState(0)

    const getUpdateFromImgName = (id) => {
        console.log("id = ", id)
        setCatId(id - 1)

    }

    const icons = [
        {
            id: 1,
            icon: Home,
            name: "DASHBOARD",
        },
        {
            id: 2,
            icon: Medical,
            name: "MEDICAL",
        },
        {
            id: 3,
            icon: Page,
            name: "APPOINTMENT",
        },
        {
            id: 4,
            icon: Community,
            name: "COMMUNITY",
        },
        {
            id: 5,
            icon: FourSquares,
            name: "MORE",
        },
    ]
    return (
        <div className='container w-full h-screen'>
            <div className='inner-container w-full h-screen flex'>

                <div className='left flex flex-col w-1/5 bg-slate-100 h-full'>
                    <div className='image-and-name-container p-10 flex justify-center items-center mb-12'>
                        <CatImg fn={getUpdateFromImgName} />
                    </div>

                    <div className='sideBar-container flex flex-col justify-between h-full'>
                        <div className='inner-sideBar-container'>
                            <ul className='list'>
                                {icons.map((item, index) => (
                                    <li className={`item flex items-center justify-start pt-4 pb-4 mt-3 mb-3 pl-4 cursor-pointer  ${selectedMenuItem == index + 1 ? "opacity-100 bg-slate-200" : "opacity-30"}`} key={index} onClick={() => setSelectedMenuItem(index + 1)}>
                                        <div className='icon w-4 mr-6' ><img style={{ width: "100%" }} src={item.icon} alt="icon" /></div>
                                        <div className='item-name text-xs tracking-widest font-medium text-slate-600'>{item.name}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='logout'>
                            <Logout />
                        </div>
                    </div>
                </div>


                <div className='right flex flex-col justify-center w-4/5'>
                    {selectedMenuItem == 1 && <DashboardView catId={catId} />}

                    {selectedMenuItem == 2 && <MedicalView />}

                    {selectedMenuItem == 3 && <AppointmentView />}

                    {selectedMenuItem == 4 && <CommunityView />}

                    {selectedMenuItem == 5 && <MoreView />}

                </div>


            </div>
        </div>
    )
}

export default Dashboard