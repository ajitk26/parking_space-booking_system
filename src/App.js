import Login from "./components/Auth/Login.js";
import Register from "./components/Auth/Register";
import {  Routes, Route } from "react-router-dom";
import ParkingDashboard from "./components/parking/ParkingDashboard.js";
import Header from "./components/Header.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/selectParkingList/ParkingDashboard" element={<ParkingDashboard />} />
        <Route path="/selectParkingList" element={<Header/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
