import React, { useEffect, useState, useSyncExternalStore } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { getAllDoctors, loginDoctor } from "../../utilities/apiCalls/doctorAPI";
import { useNavigate } from "react-router-dom";

import "./DoctorMenu.css";

//images
import Display from "../../assets/doctor/display.png";
import Search from "../../assets/doctor/search.png";

export default function DoctorMenu() {
  const navigate = useNavigate();
  return (
    <div className="menu-cont">
      <div>
        <h1 className="head">DOCTOR PORTAL MENU</h1>
      </div>
      <div className="menu-group">
        {/*  */}
        <div className="menu-item">
          <img src={Search} alt="search" className="search" />
          <button
            onClick={() => {
              navigate("/doctor/menu/search");
            }}
            className="btn prim"
          >
            Search Patient
          </button>
        </div>
        {/*  */}
        <div className="menu-item">
          <img src={Display} alt="display" className="search" />
          <button
            onClick={() => {
              navigate("/doctor/menu/display");
            }}
            className="btn prim"
          >
            Display Patients
          </button>
        </div>
      </div>
    </div>
  );
}
