import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientInfo from "../../components/PatientInfo";
import History from "../../components/History";
import Search from "../../assets/doctor/sicon.png";
import NavBar from '../../components/NavBar';
import AllPatientTable from "../../components/AllPatientTable";


export default function DoctorDisplay(){
  const navigate = useNavigate();
  document.body.style = "background: white;";
  const patients = [
    {
      id:"1",
      name: "Juana Dela Cruz",
      sex: "F",
      bday: "Jun 15, 2002",
      age: "19",
    },
    {
      id:"2",
      name: "Juana Dela Cruz",
      sex: "F",
      bday: "Jun 15, 2002",
      age: "19",
    },
    {
      id:"3",
      name: "Juana Dela Cruz",
      sex: "F",
      bday: "Jun 15, 2002",
      age: "19",
    },
  ]

  
  return (
    <>
     <NavBar 
        type="doctor"
        withBack={true}
      />

    <div className="container">
        <div className="sinput-group">
        <img src={Search} alt="Search Patient Name" className="sinput-logo" />
        <input
          name="search"
          placeholder="Search Patient Name"
          className="sinput-field"
        />
      </div>

      <AllPatientTable 
        data = {patients}
        headers = {["NAME", "SEX", "BIRTHDATE", "AGE", ""]}
      />
{/*       
      <table>
      <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>birthdate</th>
          <th>Age</th>
          <th>View</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>F</td>
          <td>2002 - 10 - 12</td>
          <td>19</td>
          <td className="btn-cont">          <button
            onClick={() => {
              navigate("/doctor/view");
            }}
            className="view acc"
          >
            Access
          </button></td>
        </tr>
      
      </table> */}
    </div>
    </>
  );
}