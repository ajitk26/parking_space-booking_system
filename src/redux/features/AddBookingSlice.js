import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {totalHour,startDate,endDate,vehicleNumber} from "../../components/parking/ParkingDashboard"



function authHeader() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");


    console.log(token);
    let obj = {
      Authorization: token,
    };
    return obj;
  }


export const addBooking=createAsyncThunk("addBooking/getData",async(arg,{rejectWithValue})=>{
   try {
     const {data}=await axios.post("https://adminapp.mobbypark.com/api/user/booking/addBooking",{
        startTime:startDate,
        endTime:endDate,
        vehicleNumber:vehicleNumber,
        totalHour:totalHour,
     },
      { headers: authHeader() })
        // console.log(data)
        return data
       
   } catch (error) {

    rejectWithValue(error.response.data)
    
   }
})

const addBookingApiSlice=createSlice({
    name:"parkingApiData", 
    initialState:{
        data:[],
        isSuccess:false,
        message:"",
        loading:false
    },
    reducers:{},
    extraReducers:{
        [addBooking.pending]:(state,action)=>{
            state.loading=true;

        },
        [addBooking.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.data=payload;
            state.isSuccess=true;

        },
        [addBooking.rejected]:(state,{payload})=>{
            state.loading=false;
            state.message="failed";
            state.isSuccess=false;

        },

    },
})


export default addBookingApiSlice;