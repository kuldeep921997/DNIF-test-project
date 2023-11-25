import React from 'react'
import bgImage from "../assets/login_bg.jpg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { login, logout } from '../features/login/loginSlice'
// import { useSelector, useDispatch } from 'react-redux' 


const Login = () => {

    // const loginVal = useSelector((state) => state.loginStatus.loginstatus);
    // const dispatch = useDispatch();
    // console.log("loginVal = ", loginVal)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)

    const [emailErrorMsg, setEmailErrorMsg] = useState("")
    const [passErrorMsg, setPassErrorMsg] = useState("")

    const navigate = useNavigate()
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const is_email = (email) => {    
        if (email) {
            email = email.trim();
            if (filter.test(email)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    const handleForm = (e) => {
        e.preventDefault()

        setEmailError(false)
        setPassError(false)
        let isError = false;

        let isValidEmail = is_email(email)

        if(!isValidEmail){
            isError = true
            setEmailError(true)
            setEmailErrorMsg("Please Enter Valid Email Address.")
        }

        if (email == "" || email == undefined || (email && email.length == 0)) {
            isError = true
            setEmailError(true)
            setEmailErrorMsg("Please Enter Email.")
        }

        if (pass == "" || pass == undefined || (pass && pass.length == 0)) {
            isError = true
            setPassError(true)
            setPassErrorMsg("Please Enter Password.")
        }

        if(!isError){
            // dispatch(login())
            localStorage.setItem("isLogin", true)
            navigate("/dashboard")
        }
    }

    return (
        <div className='container w-full h-screen'>
            <div className='inner-container w-full h-screen bg-slate-800 flex flex-row items-center justify-center'>
                <div className="w-[50rem] h-[30rem] bg-no-repeat bg-cover relative flex items-center justify-center" style={{ backgroundImage: `url(${bgImage})` }}>

                    <form className='w-4/5 h-2/3 bg-white rounded-md  text-slate-600 text-lg tracking-wider font-light'>
                        <div className=' w-full flex items-start mb-1 font-medium pt-8 pl-8'>LOGIN</div>

                        <div className='input-container flex flex-col p-8 pt-4 pb-5'>

                            <div className='email-container flex flex-col justify-start mb-8'>
                                <input className='outline-none border-0 border-b-2 border-gray-300 h-10' type="text" placeholder='EMAIL' value={email} onChange={(e) => setEmail(e.target.value)} />
                                {emailError && <div className='text-red-500 font-semibold flex text-xs'>{emailErrorMsg}</div>}
                            </div>

                            <div className='password-container flex flex-col justify-start mb-8'>
                                <input className='outline-none border-0 border-b-2 border-gray-300 h-10' type="password" placeholder='PASSWORD' value={pass} onChange={(e) => setPass(e.target.value)} />
                                {passError && <div className='text-red-500 font-semibold flex text-xs'>{passErrorMsg}</div>}
                            </div>

                            <div className='forgot-pass text-xs font-medium mb-4 cursor-pointer w-fit ml-auto mr-auto' onClick={() => navigate("/forgot-password")}>FORGOT YOUR PASSWORD</div>

                        </div>

                        <div className='sign-up-in flex h-12 text-xs font-medium' style={{ borderRadius: "0px" }}>
                            <button className='register w-1/2 flex bg-[#e9e8ec] text-[#80899a] justify-start items-center pl-6  border-0 focus:outline-none' style={{ borderRadius: "0px", borderBottomLeftRadius: "6px" }} onClick={() => navigate("/register")}>REGISTER</button>
                            <button className='signin w-1/2 flex bg-[#2c3a55] text-white justify-end items-center pr-6 border-0 focus:outline-none' style={{ borderRadius: "0px", borderBottomRightRadius: "6px" }} onClick={(e) => handleForm(e)}>SIGN IN</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login