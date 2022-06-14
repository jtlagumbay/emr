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
    <div >
    <div className="contain">
      {/* <div>
        <h1 className="headr">I AM A</h1>
      </div> */}

      <div className="menu-group">

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
      </div>

      {/* <div className="banner">
        <h6 classname="head" style={{ color: "white" }}>
          {" "}
          MediVAULT: A Self-help Medical Record Management System
        </h6>
      </div> */}
    </div>
    <img src={banner} alt="patient" className="banner"/>
    </div>
  );
}
