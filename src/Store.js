import{configureStore}from "@reduxjs/toolkit"
import { badhonReducer } from "./Reducers"

const store = configureStore({

    reducer:{
        custom : badhonReducer,
    }
})



export default store