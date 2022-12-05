import React, { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CForm,
  CRow,
  CFormLabel,
  CCol,
  CButton,
  CFormInput,
  CInputGroup,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate()
  const [authId,] = useState(null);
  
  


  return (
    <div>
      <div className="root-form">
        <img className="img2" src="./background.jpg" alt="backgroundImg"></img>
        {authId === null ? (
          <>
            <CForm className="form">
              <p className="heading">Signup</p>
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
                      <CDropdownMenu>
                        <CDropdownItem href="#">+91</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                    <CFormInput
                      id="signUpForm"
                      name="phone"
                      aria-label="Text input with dropdown button"
                      // value={mobile}
                      // onChange={(e) => setMobile(e.target.value)}
                    />
                  </CInputGroup>
                </CCol>
              </CRow>
              <CButton
                type="submit"
                className="mb-3 btn"
                // onSubmit={handleSendOtpForm}
              >
                Send OTP
              </CButton>
              
              <p style={{ marginTop: 12 }}>
                Already have an account? &nbsp;{" "}
                <CButton
                  className="btn"
                  onClick={() =>navigate("/")}
                >
                  Login
                </CButton>
              </p>
            </CForm>
          </>
        ) : (
          <>
            <CForm className="form" >
              <CRow className="mb-3 row">
                <CFormLabel
                  htmlFor="inputNumber3"
                  className="col-sm-4 col-form-label"
                >
                  Enter OTP :
                </CFormLabel>
                <CCol sm={6}>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      required
                      id="otpCode"
                      name="otpCode"
                      aria-label="Text input with dropdown button"
                      // value={mobile}
                      // onChange={(e) => setMobile(e.target.value)}
                    />
                  </CInputGroup>
                </CCol>
              </CRow>
              <CButton
                type="submit"
                className="mb-3 btn"
                // onSubmit={handleSendOtpForm}
              >
                Verify OTP
              </CButton>
              
            </CForm>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
