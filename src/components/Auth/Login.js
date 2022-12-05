import React, { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {Button} from '@mui/material'
import {
  CForm,
  CRow,
  CFormLabel,
  CCol,
  CFormInput,
  CInputGroup,
  CDropdown,
  CDropdownToggle,
} from "@coreui/react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert"


export default function Login() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);



  const handlePhone = (e) => {
    setPhone(e.target.value);
    console.log(phone)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };


  const handleApi = () => {
    axios
      .post('https://adminapp.mobbypark.com/api/user/auth/login', {
        phone: 91+phone,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        localStorage.setItem('token', result.data.token)

        navigate('/SelectParkingList')
      })
      .catch((error) => {
        setAlert(!alert)
      });
    
  };
  return (
    <>
      <div className="root-form">
        <img className="img" src="./background.jpg" alt=" "></img>
        <CForm className="form">
          <p className="heading">Login</p>
          {alert === true ? <Alert severity="error" style={{width: '80%', margin: '1rem auto'}} onClose={() => {setAlert(!alert)}}>PhoneNo. and Password dosen't Match</Alert> : null}
          <br></br>
          <CRow className="mb-3 row">
            <CFormLabel
              htmlFor="inputNumber3"
              className="col-sm-4 col-form-label"
            >
              Mobile No. :
            </CFormLabel>
            <CCol sm={6}>
              <CInputGroup className="mb-3">
                <CDropdown variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    +91
                  </CDropdownToggle>

                </CDropdown>
                <CFormInput
                  value={phone}
                  onChange={handlePhone}
                  aria-label="Text input with dropdown button"
                />
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow className="mb-3 row">
            <CFormLabel
              htmlFor="inputPassword3"
              className="col-sm-4 col-form-label"
            >
              Password :
            </CFormLabel>
            <CCol sm={6}>
              <CFormInput
                type="password"
                id="inputPassword3"
                value={password}
                onChange={handlePassword}
              />
            </CCol>
          </CRow>
          <div className="forgetPass">
          <Button variant="contained" type="button" className="mb-3" onClick={handleApi}>
            LogIn
          </Button>
          <p style={{marginLeft:40,fontWeight:500}}>Forgot Password ?</p>
          </div>
          <p>
            Don't have an account? &nbsp;{" "}
            <Button
            variant="contained"
              className="btn"
              onClick={() => navigate("register")}
            >
              Sign Up
            </Button>
          </p>
        </CForm>
      </div>
    </>
  );
}
