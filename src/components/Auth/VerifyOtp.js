import React from 'react'
import { CButton,CForm,CRow,CCol,CFormLabel,CInputGroup,CFormInput, } from '@coreui/react'

const VerifyOtp = (props) => {
  return (
    <div>
         <CForm className="form">
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
            Verify OTP
          </CButton>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
          <p style={{ marginTop: 12 }}>
            Already have an account? &nbsp;{" "}
            <CButton
              className="btn"
              onClick={() => props.onFormSwitch("Login")}
            >
              Login
            </CButton>
          </p>
        </CForm>
    </div>
  )
}

export default VerifyOtp