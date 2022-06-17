import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import patientIcon from "../../assets/home/patientIcon.png";
import doctorIcon from "../../assets/home/doctorIcon.png";
import banner from "../../assets/home/banner.png";
import "../home/Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (

    <div className="contain">
      <div className="home-header">
        <h1 className="header-title">
          MediVault
        </h1>
      </div>
      <div className="body">
        <h1 className="body-title">I AM A</h1>
        <div className="body-content">
          <div className="body-img-icon">
            <img src={patientIcon} alt="patient" className="body-icon"/>
            <button onClick={() => {navigate("/patient/login")}}             className="buttn prima"
            >PATIENT</button>
          </div>
          <div className="body-img-icon">
            <img src={doctorIcon} alt="patient" className="body-icon"/>
            <button onClick={() => {navigate("/doctor/login")}}             className="buttn prima"
            >DOCTOR</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <h2 className="footer-title">
          <span className="bold">MediVault: </span>A Self-help Medical Record Management System
        </h2>
        <p className="footer-subtitle">LAGUMBAY | MARFA | PUYOT</p>
      </div>



      {/* <div>
        <h1 className="headr">I AM A</h1>
      </div> */}

      {/* <div className="menu-group">

        <div className="menu-item">
          <img src={patientIcon} alt="patient" className="icon" />
          <div className="buttn-cont">
            <button
              onClick={() => {
                navigate("/patient/login");
              }}
              className="buttn prima"
            >
              Patient
            </button>
          </div>
        </div>

        <div className="menu-item">
          <img src={doctorIcon} alt="display" className="icon" />

          <div className="buttn-cont">
            <button
              onClick={() => {
                navigate("doctor/login");
              }}
              className="buttn prima"
            >
              Doctor
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="banner">
        <h6 classMame="head" style={{ color: "white" }}>
          {" "}
          MediVAULT: A Self-help Medical Record Management System
        </h6>
      </div> */}
      {/* <img src={banner} alt="patient" className="banner"/> */}
    </div>
    

  )
}
