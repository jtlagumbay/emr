import React, { useState, useEffect } from "react";
import PatientInfo from "../../components/PatientInfo";
import History from "../../components/History";
import Search from "../../assets/doctor/sicon.png";
import NavBar from '../../components/NavBar';
import { useLocation, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getAge } from "../../utilities/common";

export default function PatientViewDetails(){
  document.body.style = "background: white;";
  const {id} = useParams()
  const {state} = useLocation()
  console.log(state)
  // useEffect(()=>{
  //   var axios = require("axios");
  //   var qs = require("qs");
  //   var data = qs.stringify({});
  //   var config = {
  //     method: "post",
  //     url: window.$URL+"patients/get/"+id,
  //     headers: {
  //       api_key: window.$API_KEY,
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
 
  //   };
  //   axios(config)
  //   .then(async function (response) {
  //     console.log(response.data);
  //     let info = {};
  //     info.name= response.data.name
  //     info.bday= response.data.b_day
  //     info.age= getAge(response.data.b_day)
  //     info.sex= response.data.sex
  //     info.contact_no= response.data.contact_no
  //     info.emergency_name= response.data.emergency_name
  //     info.emergency_contact= response.data.emergency_no
  //     setPatientInfo(info)
  //   })
  //   .catch(function (error) {
  //     // console.log(error.response); 
  //       toast.error("Network error. Please try again.",{
  //         style: {
  //           borderRadius: '10px',
  //           background: '#333',
  //           color: '#fff',
  //         },
  //         duration:3000
  //       })
  //   });
  // },[])


  return (
    <>
      <NavBar 
        type="patient"
        withBack={true}
      />
    <div className="container">
      <br/>
      <h1 className="page-title">Medical Diagnosis</h1>
      <br/>

      <div className="section">
            <table className="table table-lg table-responsive">
              <tbody>
                <tr>
                  <th scope="row" width={100}>Date</th>
                  <td>{state.date}</td>
                </tr>
                <tr>
                  <th scope="row">Doctor</th>
                  <td>{state.doctor}</td>
                </tr>
              </tbody>
            </table>
      </div>
      <br/>
      <br/>
      <div className="section-cols">
      <div className="section cols mr">
        <h1 className="section-title">Diagnosis</h1>
        <div>
          {state.diagnosis.map((data, index)=><>
            <span>{index+1}.) {data}</span><br/>
          </>)}
        </div>
      </div>
      <br/>
      <br/>
      <div className="section cols">
        <h1 className="section-title">Prescription</h1>
        <div>
          {state.prescription.map((data, index)=><>
            <span>{index+1}.) {data}</span><br/>
          </>)}

        </div>
      </div>
      </div>

        {/* <div className="sinput-group">
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

      <History data={history} headers={["DATE", "DOCTOR", "DIAGNOSIS", ""]} />
      <br />
      <br /> */}
    </div>
    </>
  );
}