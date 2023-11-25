import React from 'react'
import { useNavigate } from 'react-router-dom';
import LogoutIcon from "../assets/icons/logout.png"
// import { login, logout } from '../features/login/loginSlice';
// import { useDispatch } from 'react-redux';

const Logout = () => {


    const navigate = useNavigate()
    // const dispatch = useDispatch()

    const Userlogout = () => {
        console.log("Inside logout");
        // dispatch(logout())
        localStorage.setItem("isLogin", false)
        navigate("/")
    }

    return (
        <>
            <button onClick={() => Userlogout()} className='flex w-full bg-red-300 rounded-none outline-none border-0 focus:outline-none'>
                <div className='w-10'>
                    <img style={{ width: "100%" }} src={LogoutIcon} alt="icon" className='pr-4' />
                </div>
                Logout
            </button>

        </>
    )
}

export default Logout