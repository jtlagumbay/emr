import React from 'react'

import '../patient/PatientLogin.css'

export default function PatientSignup() {
  return (
    <div className="container portal-container">
      <div >
        <h1 className="header">PATIENT PORTAL</h1>
      </div>
      <br/>
      <div className="container">
        <p className="p-0 m-0 subheader">Personal Details:</p>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
            <br />
            <input 
              name="name"
              placeholder='ex: Juan Dela Cruz'
              className="input-form"
            />
          </div>
          <div className="col-6">
            <label>Birthdate</label>
            <br />
            <input 
              name="bday"
              type="date"
              placeholder='ex: Juan Dela Cruz'
              className="input-form"
            />
          </div>
        
        </div>
        <br/>
        <div className="row">
          <div className="col-6">
            <label>Sex at Birth</label>
            <br />
            <input 
              name="sex"
              type="radio"
              id="f"
              value="f"
            />            
            <label htmlFor='f' className="radio-label">F</label>
            <input 
              name="sex"
              type="radio"
              id="m"
              value="m"
            />
            <label htmlFor='m' className="radio-label">M</label>
            <input 
              name="sex"
              type="radio"
              id="b"
              value="b"
            />
            <label htmlFor='b' className="radio-label">B</label>
          </div>
          <div className="col-6">
            <label>Contact Number</label>
            <br />
            <input 
              name="contact_no"
              placeholder='ex: 09123456789'
              className="input-form"
            />
          </div>
        </div>
        <br />
        <p className="p-0 m-0 subheader">In case of emergency, contact:</p>
        <div className="row">
          <div className="col-6">
            <label>Name</label>
            <br />
            <input 
              name="emergency_name"
              placeholder='ex: Teodora Dela Cruz'
              className="input-form"
            />
          </div>
          <div className="col-6">
            <label>Contact number</label>
            <br />
            <input 
              name="emergency_contact"
              placeholder='ex: 09123456789'
              className="input-form"
            />
          </div>
        </div>
        <br/>
        <p className="p-0 m-0 subheader">Login Credentials:</p>
        <div className="row">
          <div className="col-6">
            <label>Username</label>
            <br />
            <input 
              name="username"
              placeholder='ex: jdelacruz'
              className="input-form"
            />
          </div>
          <div className="col-6">
            <label>Password</label>
            <br />
            <input 
              name="password"
              type="password"
              placeholder='ex: P@ssw0rD'
              className="input-form"
            />
          </div>
        </div>
        
      
      </div>

    <br/>
      <div className="button-container">
        <button className="button primary">Sign up</button>
      </div>
    </div>

  )
}
