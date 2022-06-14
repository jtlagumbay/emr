import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientInfo from "../../components/PatientInfo";
import History from "../../components/History";
import Search from "../../assets/doctor/sicon.png";


export default function DoctorDisplay(){
  const navigate = useNavigate();
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
      {/* <br />
      <PatientInfo data={patientInfo} button={"Add Diagnosis"} />
      <br />
      <br />

      <History data={history} headers={["DATE", "DOCTOR", "DIAGNOSIS", ""]} /> */}
      {/* Medical Records */}
      {/* <br />
      <br /> */}
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
      
      </table>
    </div>
  );
}