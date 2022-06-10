import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import  patientIcon  from '../../assets/home/patientIcon.png'
import doctorIcon from '../../assets/home/doctorIcon.png'
import banner from '../../assets/home/banner.png'
import '../home/Home.css'


export default function Home() {
  const navigate = useNavigate()
  return (
<div>
      <div className="banner"> 
      <h1 style={{ color: "white"}}>MediVault</h1>
      </div>

      <div>
        <img src={patientIcon} alt="patient" width="100" height="100"></img>
        <button onClick={()=>{navigate('/login/patient')}}>Patient</button>
    
      </div>
      <div>  
        <img src={doctorIcon} alt="doctor" width="100" height="100"></img>
        <button onClick={()=>{navigate('/login/doctor')}}>Doctor</button>
      
      <div className="banner"> 
      
      <h6 style={{ color: "white"}}>MediVault: A Self-help Medical Record Management System</h6>
      
      </div>

        </div>
      


    </div>
  )
}
