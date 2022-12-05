import React, { useState} from "react";
import { TextField, Button, CircularProgress,Divider, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

import  {getParkingList}  from "../../redux/features/ParkingApiSlice";
import "./parking.css";
import {
  CCard,
 
} from "@coreui/react";

import { useDispatch, useSelector } from "react-redux";


export default function SelectParkingList(props) {
    
  const navigate = useNavigate()
  const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);

  console.log(location)
  const dispatch= useDispatch();

  const parkingApiData=useSelector((state)=>state.parkingApiData.data);

  console.log(parkingApiData)



  //  useEffect(()=>{
  //   dispatch(getParkingList())
  //  },[])
  // console.log(location);

  // function authHeader() {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   let obj = {
  //     Authorization: token,
  //   };
  //   return obj;
  // }

  // const handleApi = () => {
    // Axios.post(
    //   "https://adminapp.mobbypark.com/api/user/getParkingspace/nearAll",
    //   {
    //     location: location,
    //   },
    //   { headers: authHeader() }
    // )
  //     .then((result) => {
  //       console.log(result.data);
  //       setMyData(result.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
        <div className="selectCity">
         

          <Autocomplete
            value={location}
            onChange={(event, newLocation) => {
              setLocation(newLocation);
            }}
            disablePortal
            id="combo-box-demo"
            options={allLocation}
            sx={{ width: 400 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Location" />
            )}
          />
          <Button variant="contained" onClick={()=>dispatch(getParkingList())}  sx={{ height: 53 }}>
            Submit
          </Button>
        </div>
        {loading === true ? <CircularProgress  style={{width: '80%', margin: '1rem auto'}} onClose={() => {setLoading(!loading)}}/> : null}


        <div style={{ marginTop: 20 }} className="parkingListContainer">
          {parkingApiData.map((parkingLst) => {
            const { id, name, parking_name, email, phone, city, parking_addr } =
              parkingLst;
            return (
              <div key={id}>
   
          <CCard
                className="parkingCard" onClick={() => navigate("parkingDashboard",{state:{parking_name}})}>
                    <Typography sx={{fontWeight:600}} variant="h5">Parking Name : {parking_name}</Typography>
                    <Divider/>

                  <Typography sx={{marginTop:3}}>
                  <h6><b>Phone : </b>{phone}</h6>
                  <h6><b>Email : </b>{email}</h6>
                  <h6><b>Name : </b> {name}</h6>
                  <h6><b>City : </b> {city}</h6>
                  <h6><b>Parking Address : </b>{parking_addr}</h6>
                  </Typography>
                </CCard>
            
              </div>
            );
          })}
        </div>
    </>
  );
}

const allLocation = [
  { label: "Bangalore" },
  { label: "Hubli-Dharwad" },
  { label: "Mysore" },
  { label: "Kalaburagi" },
  { label: "Mangalore" },
  { label: "Hegade Naga" },
  { label: "Hesaraghatta" },
  { label: "Hoskote" },
  { label: "Hosur" },
  { label: "Hosur Road" },
  { label: "Indiranagar" },
  { label: "JP Nagar" },
  { label: "Jayanagar" },
  { label: "Kaggalipura" },
  { label: "KGA Golf Course" },
  { label: "Koramangala" },
  { label: "Krishnarajapuram" },
  { label: "Kundana" },
  { label: "Langford Town" },
  { label: "Malleswaram" },
  { label: "Marathahalli" },
  { label: "MG Road " },
  { label: "Minerva Circle" },
  { label: "Mysore Road" },
  { label: "Palace Grounds" },
  { label: "Race Course Road" },
  { label: "Rajajinagar" },
  { label: "Seshadripuram " },
  { label: "Shivaji Nagar " },
  { label: "Tumkur Road" },
  { label: "Ulsoor Lake" },
  { label: "Vasanth Nagar" },
  { label: "Whitefield" },
  { label: "Yelahanka" },
  { label: "Yelahanka Devanhalli Road" },
];
