import React from 'react'

import '../patient/PatientLogin.css'

export default function PatientSignup() {
  return (
    <div className="portal-container">
      <div >
        <h1 className="header">PATIENT PORTAL</h1>
      </div>
      <div className="form-group">
        <div>
          <label>Name</label>
          <br />
          <input 
            name="name"
            placeholder='ex: Juan Dela Cruz'
            className="input-form"
          />
          <br />
          <div  className="form-row">
          <label>Birthdate</label>
          <br />
          <input 
            name="bday"
            type="date"
            placeholder='ex: Juan Dela Cruz'
            className="input-form"
          />
          <br />

          <label>Sex at Birth</label>
          <br />
          <input 
            name="sex"
            type="radio"
            id="f"
            value="f"
          /><label htmlFor='f'>F</label>
          <input 
            name="sex"
            type="radio"
            id="m"
            value="m"
          /><label htmlFor='m'>M</label>
          <input 
            name="sex"
            type="radio"
            id="b"
            value="b"
          /><label htmlFor='b'>M</label>
          <br />
          </div>

          <label>Contact Number</label>
          <br />
          <input 
            name="contact_no"
            placeholder='ex: 09123456789'
            className="input-form"
          />
          <br />
          
          <label>Contact in-case-of-emergency</label>
          <br />
          <input 
            name="emergency_name"
            placeholder='ex: Juana Dela Cruz'
            className="input-form"
          />
          <br />
          <label>Contact in-case-of-emergency</label>
          <br />
          <input 
            name="emergency_contact"
            placeholder='Name'
            className="input-form"
          />
          <br />
          <label>Username</label>
          <br />
          <input 
            name="username"
            placeholder='ex: jdelacruz'
            className="input-form"
          />
          <br />
          <label>Password</label>
          <br />
          <input 
            name="password"
            type="password"
            placeholder='ex: P@ssw0rD'
            className="input-form"
          />
          <br />
          
        </div>

      </div>
      <div className="button-container">
        <button className="button primary">Sign up</button>
      </div>
    </div>

  )
}
