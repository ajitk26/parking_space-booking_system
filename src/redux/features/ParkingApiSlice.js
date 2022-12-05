import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function authHeader() {
    const token = localStorage.getItem("token");
    console.log(token);
    let obj = {
      Authorization: token,
    };
    return obj;
  }


export const getParkingList=createAsyncThunk("parkingApiSlice/getData",async(arg,{rejectWithValue})=>{
   try {
     const {data}=await axios.post("https://adminapp.mobbypark.com/api/user/getParkingspace/nearAll",{},
      { headers: authHeader() })
        // console.log(data)
        return data
       
   } catch (error) {

    rejectWithValue(error.response.data)
    
   }
})

const parkingApiSlice=createSlice({
    name:"parkingApiData", 
    initialState:{
        data:[],
        isSuccess:false,
        message:"",
        loading:false
    },
    reducers:{},
    extraReducers:{
        [getParkingList.pending]:(state,action)=>{
            state.loading=true;

        },
        [getParkingList.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.data=payload;
            state.isSuccess=true;

        },
        [getParkingList.rejected]:(state,{payload})=>{
            state.loading=false;
            state.message="failed";
            state.isSuccess=false;

        },

    },
})


export default parkingApiSlice;