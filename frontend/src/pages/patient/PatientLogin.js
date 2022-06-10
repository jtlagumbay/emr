import React from "react";
// import Username from "../../images/username.png";
import Username from "../../assets/patientlogin/username.png";
// import Password from "../../images/password.png"
import Password from "../../assets/patientlogin/password.png";

import "./PatientLogin.css";

export default function PatientLogin() {
  return (
    <div className="portal-container">
      <div>
        <h1 className="header">PATIENT PORTAL</h1>
      </div>
      <div className="form-group">
        <div className="input-group">
          <img src={Username} alt="Username" className="input-logo" />
          <input
            name="username"
            placeholder="Username"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <img src={Password} alt="Password" className="input-logo" />
          <input
            name="password"
            placeholder="Password"
            className="input-field"
          />
        </div>
      </div>
      <div className="button-container">
        <button className="button secondary">Sign up</button>
        <button className="button primary">Login</button>
      </div>
    </div>
  );
}
