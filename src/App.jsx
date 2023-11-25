import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import ForgotPass from './components/ForgotPass'
import { Route, Routes, useFetcher, useNavigate } from 'react-router-dom'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
// import { login, logout } from './features/login/loginSlice'
// import { useSelector, useDispatch } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {

    let isLogin = localStorage.getItem("isLogin");

    console.log("isLogin = ", isLogin)

    if(isLogin) {
      // dispatch(login())
      console.log("passing to dashboard")
      navigate("/dashboard")
    }

    // else if(!isLogin) {
    //   dispatch(logout())
    // }

  }, [])

  return (
    <>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="forgot-password" element={<ForgotPass />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>

    </>
  )
}

export default App
