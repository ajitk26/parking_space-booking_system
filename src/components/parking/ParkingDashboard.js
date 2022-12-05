import { CFormSelect } from "@coreui/react";
import React from "react";
import "./parking.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setMinutes from "date-fns/setMinutes";
import { useSelector } from "react-redux";


export default function ParkingDashboard() {
  const userId=localStorage.getItem('user._id')
  console.log(userId)
  


  const priceFourWheeler = 40;
  // const priceTwoWheeler=20;


  const [vehicleNumber,setVehicleNumber]=useState({})

  const [startDate, setStartDate] = useState(
    setMinutes(new Date(),0)
  );
  const startTime=startDate.getHours()


  console.log(startTime)


  const [endDate, setEndDate] = useState(
    setMinutes(new Date(),0)
  );
  const endTime=endDate.getHours()

  console.log(endTime)


  const totalHour=endTime-startTime

  const handleNumber=(e)=>{
    setVehicleNumber(e.target.value)
  }

  console.log(vehicleNumber)
  const filterPassedTime = (time) => {
    const currentDate = setMinutes(new Date(),0);
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };


  const handlePrice = () => {
   
    if (endTime-startTime<=0) {
      return "00";
    } else if (endTime-startTime===1) {
      return priceFourWheeler;
    }else if(endTime-startTime===2){
      return priceFourWheeler;
    }
     else {
      return ( priceFourWheeler + (totalHour-2)*20);
    }
  };
  

  const parkingApiData = useSelector((state) => state.parkingApiData.data);
  console.log(parkingApiData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  
  const location = useLocation();
  return (
    <>
      <div className="parking-root">
        <img
          src="../../background_parkingDash.jpg"
          alt='background-img'
          className="p-background"
        />
        <div className="p-content">
          <div className="p-form">
            <p className="p-heading">{location.state.parking_name}</p>
            <div className="available-slots">
              <p>Parking type: Mall</p>
              <p>Car: 40</p>
              <p>Bike: 20</p>
            </div>
            <div className="choose-vehicle">
              <CFormSelect className="select">
                <option value="1">Car</option>
                <option value="2">Bike</option>
              </CFormSelect>
              <input onChange={handleNumber} type="text" className="inp" placeholder="Number Plate" />
            </div>
            <div className="date-time">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3} sx={{ marginTop: 2 }}>
                  <DatePicker
                    className="inputHour"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    filterTime={filterPassedTime}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                  />
                  <DatePicker
                  className="inputHour"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    showTimeSelect
                    filterTime={filterPassedTime}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                  />
                  
                </Stack>
              </LocalizationProvider>
            </div>
            <Button variant="contained" sx={{width:100,marginTop:3}}>Book</Button>

            <div className="result"> 
              <div className="btn-root">
                <Button variant="contained">TIME : {totalHour} H</Button>
                <Button variant="contained" onClick={handlePrice}>Cost : Rs {handlePrice()}</Button>
              </div>
              <Button variant="contained" className="p-btn pay">
                Pay
              </Button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
