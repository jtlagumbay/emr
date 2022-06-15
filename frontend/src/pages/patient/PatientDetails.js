import React, {useState} from 'react'
import PatientInfo from '../../components/PatientInfo'
import History from '../../components/History'
import NavBar from '../../components/NavBar';

export default function PatientDetails() {
  document.body.style = 'background: white;';
  const [patientInfo, setPatientInfo] = useState({
    name: "Juana Dela Cruz",
    bday: "Jun 1, 2022",
    age:  "20",
    sex: "Female",
    contact_no: "09123445",
    emergency_name: "Teodora",
    emergency_contact: "091234"
  })

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
