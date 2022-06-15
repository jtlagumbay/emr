import React, {useState} from 'react'
import PatientInfo from '../../components/PatientInfo'
import History from '../../components/History'
import NavBar from '../../components/NavBar';
import { getPatientInfo } from '../../utilities/common';

export default function PatientDetails() {
  document.body.style = 'background: white;';
  const patientInfo = getPatientInfo();

  
  const patient = getPatientInfo()
  console.log(patient)
  const [history, setHistory] = useState([
    {
      date:"May 1, 2022",
      doc: "Dr. Steven Strange",
      diagnosis: "Csadfakhfadlfh" 
    },    
    {
      date:"May 1, 2022",
      doc: "Dr. Steven Strange",
      diagnosis: "Csadfakhfadlfh" 
    },    
    {
      date:"May 1, 2022",
      doc: "Dr. Steven Strange",
      diagnosis: "Csadfakhfadlfh" 
    },    
    {
      date:"May 1, 2022",
      doc: "Dr. Steven Strange",
      diagnosis: "Csadfakhfadlfh" 
    },
  ])




  return (
    <>
    <NavBar 
        type="patient"
        data={patientInfo}
        withBack={false}
      />
    <div className='container'>
      
      <br/>
      <PatientInfo 
        data = {patientInfo}
        button={"Edit Profile"}
        
      />
      <br/>
      <br/>
      
      <History 
        data = {history}
        headers = {["DATE", "DOCTOR", "DIAGNOSIS", ""]}
      />
        {/* Medical Records */}
      <br/>
      <br/>
    </div>
    </>
  )
}
