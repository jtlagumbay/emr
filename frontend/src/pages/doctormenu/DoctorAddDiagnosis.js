import React, {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar';
import toast from "react-hot-toast";
import { getAge, getDoctorInfo } from "../../utilities/common";
import { useNavigate, useParams } from 'react-router-dom';
import PatientInfo from '../../components/PatientInfo';

import "./doctorAddDiagnosis.css"

export default function DoctorAddDiagnosis() {

  const {id} = useParams()
  const navigate = useNavigate()

  // Fetch patientInfo
  const [patientInfo, setPatientInfo] = useState({});
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
      // console.log(response.data);
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

  const [diagnosisItems, setDiagnosisItems] = useState([
    {
      diagnosis: ""
    },
    {
      diagnosis: ""
    },
  ])

  // function for adding line in diagnosis
  function addDiagnosisItem(){
    const newList = [...diagnosisItems, {
      diagnosis:""
    }]
    setDiagnosisItems(newList)
  }

  // function for handling changes in diagnosis form
  function handleDiagnosisChange(e, index){
    const {name, value} = e.target
    let list = [...diagnosisItems]
    list[index][name]=value;
    setDiagnosisItems(list)
  }

  // prescription items
  const [prescriptionItems, setPrescriptionItems] = useState([
    {
      prescription: ""
    },
    {
      prescription: ""
    },
  ])

  // function for adding line in prescription
  function addPrescriptionItem(){
    const newList = [...prescriptionItems, {
      prescription:""
    }]
    setPrescriptionItems(newList)
  }

  // function for handling changes in prescription form
  function handlePrescriptionChange(e, index){
    const {name, value} = e.target
    let list = [...prescriptionItems]
    list[index][name]=value;
    setPrescriptionItems(list)
  }

  const [click, setClick] = useState(false)

  function saveDiagnosis(e){
    e.preventDefault();
    let diagnosis = []
    diagnosisItems.map((data, index)=>{
      if(data.diagnosis!==""){
        diagnosis.push(data.diagnosis)
      }
    })
    let prescription = []
    prescriptionItems.map((data, index)=>{
      if(data.prescription!==""){
        prescription.push(data.prescription)
      }
    })
    // console.log(diagnosis)
    // console.log(prescription)

    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      patient_id: id,
      doctor_id: getDoctorInfo()._id,
      diagnosis:diagnosis,
      prescription:prescription,
    }, {arrayFormat: 'repeat'});
    var config = {
      method: "post",
      url: window.$URL+"diagnosis/create",
      headers: {
        api_key: window.$API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
    .then(async function (response) {
      // console.log(response.data);
      toast.success(response.data.message,{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration:3000
      });
      setTimeout(()=>{
        navigate(-1)
      },3000)
      
    })
    .catch(function (error) {
      console.log(error.response);
      if(error.response.data.message){
        toast.error(error.response.data.message,{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration:3000
        })
      } else if (error.response.data.error) {
        toast.error("Network error. Please try again.",{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration:3000
        })
      }

    });
  }
  
  return (
    <>
      <NavBar 
        type="doctor"
        withBack={true}
      />
      <br/>
      <div className='container'>
        <h1 className="page-title">Add Diagnosis</h1>
        <br/>
        <PatientInfo 
          data={patientInfo} button={"none"}
        />
        <br/>
        <br/>
        <div className="section-cols">       
          <div className="section cols mr">
          <h3 className="section-title mb-4">Diagnosis</h3>
          {
            diagnosisItems.map((data, index)=>{
              return(
                <>
                {/* <div className="row">
                  <div className="col-2">
                    <p>{index}</p>
                  </div>
                  
                  <textarea name="diagnosis"/>
                </div> */}
                <div className="diagnosisItem">
                  <div className="item-number">{index+1} </div>
                  <textarea name="diagnosis" className="item-input" cols="50" onChange={(e)=>handleDiagnosisChange(e, index)}/>
                </div>
                <br/>
                </>
              )
            })
          }
          <button className="item-add" onClick={(e)=>{addDiagnosisItem()}}>+ Add line</button>
          </div>
            <br/>
            <br/>
          <div className="section cols">
          <h3 className="section-title mb-4">Prescription</h3>
          {
            prescriptionItems.map((data, index)=>{
              return(
                <>
                {/* <div className="row">
                  <div className="col-2">
                    <p>{index}</p>
                  </div>
                  
                  <textarea name="diagnosis"/>
                </div> */}
                <div className="diagnosisItem">
                  <div className="item-number">{index+1} </div>
                  <textarea name="prescription" className="item-input" cols="50" onChange={(e)=>handlePrescriptionChange(e, index)}/>
                </div>
                <br/>
                </>
              )
            })
          }
          <button className="item-add" onClick={(e)=>{addPrescriptionItem()}}>+ Add line</button>
          </div>
        </div>
        <br/>
        <br/>
        <div className="page-footnote">
          <p className="item-input">Please review details before clicking save.</p>
        </div>
        <div className="page-buttons">
          <button className="button secondary border" onClick={()=>navigate(-1)}>Cancel</button>
          <button className="button primary" disable={click} onClick={e=>saveDiagnosis(e)}>Save</button>
        </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
    </>
  )
}
