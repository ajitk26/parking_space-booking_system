import { configureStore } from "@reduxjs/toolkit";
import parkingApiSlice from "./features/ParkingApiSlice";

const store= configureStore({
    reducer:{
        parkingApiData:parkingApiSlice.reducer,        
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        immutableCheck:false,
        serializableCheck: false,

    })

})


export default store;