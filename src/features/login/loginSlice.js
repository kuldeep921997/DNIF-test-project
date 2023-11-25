import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "loginStatus",
    initialState: {loginstatus: false},
    reducers: {
        login: (state) => {
            state.loginstatus = true
            localStorage.setItem("isLogin", true);
            console.log("User Logged in")
        },

        logout: (state) => {
            state.loginstatus = false
            localStorage.setItem("isLogin", false);
            console.log("User Logged out")
        },
    },
})


export const {login, logout} = loginSlice.actions
export default loginSlice.reducer