import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientInfo from "../../components/PatientInfo";
import History from "../../components/History";
import Search from "../../assets/doctor/sicon.png";
import NavBar from '../../components/NavBar';
import AllPatientTable from "../../components/AllPatientTable";
import toast from "react-hot-toast";
import { getAge } from "../../utilities/common";

export default function DoctorDisplay(){
  const navigate = useNavigate();
  document.body.style = "background: white;";
  const patientsTemp = [
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
  const [patients, setPatients] = useState([])
  useEffect(()=>{

    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({});
    var config = {
      method: "post",
      url: window.$URL+"patients/getAll",
      headers: {
        api_key: window.$API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    axios(config)
    .then(async function (response) {
      // console.log(response.data);
     setPatients([])
      response.data.map((data, index)=>{
        let info = {};
        info.id=data._id
        info.name= data.name
        info.sex= data.sex
        info.bday= data.b_day
        info.age= getAge(data.b_day)
        setPatients(oldArray=>[...oldArray, info])
      })
    })
    .catch(function (error) {
      // console.log(error.response); 
        toast.error("Network error. Please try again.",{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration:3000
        })
    });
  },[])
  // console.log(patients)
  return (
    <>
     <NavBar 
        type="doctor"
        withBack={true}
      />

    <div className="container">
        {/* <div className="sinput-group">
        <img src={Search} alt="Search Patient Name" className="sinput-logo" />
        <input
          name="search"
          placeholder="Search Patient Name"
          className="sinput-field"
        />
      </div> */}
      <br/>
      <h1 className="page-title">All Patients</h1>
            <br/>

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