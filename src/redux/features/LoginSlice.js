import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import phone from "../../components/Auth/Login"
import password from "../../components/Auth/Login"



function authHeader() {
    const token = localStorage.getItem("token");
    console.log(token);
    let obj = {
      Authorization: token,
    };
    return obj;
  }


export const login=createAsyncThunk("loginApiSlice/getData",async(arg,{rejectWithValue})=>{
   try {

    
     const {data}=await axios.post("https://adminapp.mobbypark.com/api/user/auth/login",{
        phone: 91+phone,
        password: password,
     })
        // console.log(data)
        return data
       
   } catch (error) {

    rejectWithValue(error.response.data)
    
   }
})

const loginApiSlice=createSlice({
    name:"loginApiData", 
    initialState:{
        data:[],
        isSuccess:false,
        message:"",
        loading:false
    },
    reducers:{},
    extraReducers:{
        [login.pending]:(state,action)=>{
            state.loading=true;

        },
        [login.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.data=payload;
            state.isSuccess=true;

        },
        [login.rejected]:(state,{payload})=>{
            state.loading=false;
            state.message="failed";
            state.isSuccess=false;

        },

    },
})


export default loginApiSlice;