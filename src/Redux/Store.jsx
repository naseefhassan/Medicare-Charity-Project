import { configureStore } from "@reduxjs/toolkit";
import AuthReduceer from '../Redux/Jwt'

const store=configureStore({
    reducer:{
        auth:AuthReduceer
    }
})

export default store