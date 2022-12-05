import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function authHeader() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("_id");

    console.log(token);
    let obj = {
      Authorization: token,
      userId:userId
    };
    return obj;
  }
 
  export const getPaymentData=createAsyncThunk("paymentSlice/getData",async(arg,{rejectWithValue})=>{
    try {
      const {data}=await axios.post("https://adminapp.mobbypark.com/api/user/booking/makePayment",{
       

      },
       { headers: authHeader() })
         // console.log(data)
         return data
        
    } catch (error) {
 
     rejectWithValue(error.response.data)
     
    }
 })

 const paymentApiSlice=createSlice({
    name:"parkingApiData", 
    initialState:{
        data:[],
        isSuccess:false,
        message:"",
        loading:false
    },
    reducers:{},
    extraReducers:{
        [getPaymentData.pending]:(state,action)=>{
            state.loading=true;

        },
        [getPaymentData.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.data=payload;
            state.isSuccess=true;

        },
        [getPaymentData.rejected]:(state,{payload})=>{
            state.loading=false;
            state.message="failed";
            state.isSuccess=false;

        },

    },
})

export default paymentApiSlice;