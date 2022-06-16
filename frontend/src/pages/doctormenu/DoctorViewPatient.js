import React, { useState, useEffect } from "react";
import PatientInfo from "../../components/PatientInfo";
import History from "../../components/History";
import Search from "../../assets/doctor/sicon.png";
import NavBar from '../../components/NavBar';
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { formatDate, getAge, getDoctorById } from "../../utilities/common";

export default function DoctorViewPatient(){
  document.body.style = "background: white;";
  const {id} = useParams()
  const [patientInfo, setPatientInfo] = useState({});

  const [historyTemp, setHistoryTemp] = useState([
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

  // Fetch patient info
  useEffect(()=>{
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({});
    var config = {
      method: "post",
      url: window.$URL+"patients/get/"+id,
      headers: {
        api_key: window.$API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    axios(config)
    .then(async function (response) {
      // console.log(response);
      let info = {};
      info.id = response.data._id
      info.name= response.data.name
      info.bday= response.data.b_day
      info.age= getAge(response.data.b_day)
      info.sex= response.data.sex
      info.contact_no= response.data.contact_no
      info.emergency_name= response.data.emergency_name
      info.emergency_contact= response.data.emergency_no
      setPatientInfo(info)
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
  // Fetch history
  const [history, setHistory] = useState([])
  useEffect(()=>{
    setHistory([])
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({});
    var config = {
      method: "post",
      url: window.$URL+"diagnosis/getPerPatient/"+id,
      headers: {
        api_key: window.$API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    axios(config)
    .then(async function (response) {
      setHistory([])
      // console.log(response.data);
      response.data.map(async (data,index)=>{

        let info = {};
        info.id = data._id
        let date = await new Date(data.createdAt)
        info.date = formatDate(data.createdAt)
        // Get doctor Name 
        await axios({
          method: "post",
          url: window.$URL+"doctors/get/"+data.doctor_id,
          headers: {
            api_key: window.$API_KEY,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then( function (response) {
          info.doctor = "Dr. "+ response.data.name
        })
        .catch(function (error) {
          console.log(error)
        });
        info.diagnosis = data.diagnosis
        info.prescription = data.prescription
        setHistory(oldArray=>[...oldArray, info])


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
  
  // console.log(history)
  const [historyData, setHistoryData] = useState([])
  React.useEffect(()=>{
      const newArray = Array.from(new Set(history.map(el => JSON.stringify(el)))).map(el => JSON.parse(el));
      setHistoryData(newArray)

  },[history])


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
      <br />
      <PatientInfo data={patientInfo} button={"Add Diagnosis"} />
      <br />
      <br />

      <History type={"doctor"} data={historyData} headers={["DATE", "DOCTOR", "DIAGNOSIS", ""]} />
      {/* Medical Records */}
      <br />
      <br />
    </div>
    </>
  );
}