import { configureStore } from "@reduxjs/toolkit";
import AuthReduceer from '../Redux/Jwt'

const store=configureStore({
    reducer:{
        auth:AuthReduceer
    }
})

console.log(store,"store");
export default store