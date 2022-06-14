import React, { useState } from "react";
import PatientInfo from "../../components/PatientInfo";
import History from "../../components/History";
import Search from "../../assets/doctor/sicon.png";

export default function DoctorSearch(){
  document.body.style = "background: white;";
  const [patientInfo, setPatientInfo] = useState({
    name: "Juana Dela Cruz",
    bday: "Jun 1, 2022",
    age: "20",
    sex: "Female",
    contact_no: "09123445",
    emergency_name: "Teodora",
    emergency_contact: "091234",
  });

  const [history, setHistory] = useState([
    {
      date: "May 1, 2022",
      doc: "Dr. Steven Strange",
      diagnosis: "Csadfakhfadlfh",
    },
    {
      date: "May 1, 2022",
      doc: "Dr. Steven Strange",
      diagnosis: "Csadfakhfadlfh",
    },
    {
      date: "May 1, 2022",
      doc: "Dr. Steven Strange",
      diagnosis: "Csadfakhfadlfh",
    },
    {
      date: "May 1, 2022",
      doc: "Dr. Steven Strange",
      diagnosis: "Csadfakhfadlfh",
    },
  ]);

  return (

    <div className="container">
        <div className="sinput-group">
        <img src={Search} alt="Search Patient Name" className="sinput-logo" />
        <input
          name="search"
          placeholder="Search Patient Name"
          className="sinput-field"
        />
      </div>
    </div>
  );
}