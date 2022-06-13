import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import  patientIcon  from '../../assets/home/patientIcon.png'
import doctorIcon from '../../assets/home/doctorIcon.png'
import banner from '../../assets/home/banner.png'
import '../home/Home.css'


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className='banner'></div>

      <div>
        <h1 className="head">MediVAULT</h1>
         </div>

      <div className="menu-group">
        {/*  */}
        <div className="menu-item">
          <img src={patientIcon} alt="patient" className="icon" />
          <button
            onClick={() => {
              navigate("/patient/login");
            }}
            className="btn prim"
          >
            Patient Portal
          </button>
        </div>
      
        {/*  */}
        <div className="menu-item">
          <img src={doctorIcon} alt="display" className="icon" />
          <button
            onClick={() => {
              navigate("doctor/login");
            }}
            className="btn prim"
          >
            Doctor Portal
          </button>
        </div>
      </div>
  
      <div className="banner"></div>
    
    </div>
  )
}
