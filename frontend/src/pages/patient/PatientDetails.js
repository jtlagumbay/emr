import React, {useState, useEffect} from 'react'
import PatientInfo from '../../components/PatientInfo'
import History from '../../components/History'
import NavBar from '../../components/NavBar';
import { getPatientInfo } from '../../utilities/common';
import { formatDate } from '../../utilities/common';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function PatientDetails() {
  document.body.style = 'background: white;';
  const patientInfo = getPatientInfo();
  const navigate = useNavigate()
  const {id} = useParams()
  
  const patient = getPatientInfo()

  const [historyTemp, setHistoryTemp] = useState([
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


  const [history, setHistory] = useState([])
  useEffect(()=>{
    history.length=0;
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({});
    var config = {
      method: "post",
      url: window.$URL+"diagnosis/getPerPatient/"+patient.id,
      headers: {
        api_key: window.$API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    axios(config)
    .then( async function (response) {
      history.length=0;
      console.log(response.data);
      await response.data.map( async (data,index)=>{
        history.length=0
        let info = {};
        info.id = data._id
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

  const [historyData, setHistoryData] = useState([])
  React.useEffect(()=>{
      const newArray = Array.from(new Set(history.map(el => JSON.stringify(el)))).map(el => JSON.parse(el));
      setHistoryData(newArray)

  },[history])



  const [formData, setFormData] = useState({
    name: patientInfo.name,
    b_day: patientInfo.bday,
    sex: patientInfo.sex,
    contact_no: patientInfo.contact_no,
    emergency_name: patientInfo.emergency_name,
    emergency_no: patientInfo.emergency_contact,

  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));}

  const [showEdit, setShowEdit] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  function handleEdit(){
    console.log("edit")
    setShowEdit(true)
  }
  function handleSave(e){
    e.preventDefault()
    console.log(formData)
      var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify(formData);
    var config = {
      method: "post",
      url: window.$URL+"patients/update/"+patient.id,
      headers: {
        api_key: window.$API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        console.log(response.data);
        let data = await response.data.data
        console.log(data)
        toast.success(response.data.message,{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration:3000
        });
        toast("Please login again.",{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration:3000
        })
        setTimeout(()=>{
          navigate("/patient/login")
          localStorage.clear()
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
    // setShowEdit(false)
  }
  return (
    <>
    <NavBar 
        type="patient"
        data={patientInfo}
        withBack={false}
      />
    <div className='container'>
      
      <br/>
      {!showEdit&&<PatientInfo 
        data = {patientInfo}
        button={"Edit Profile"}
        buttonFunc = {handleEdit}
      />}
      {showEdit&&<PatientInfo 
        type = {"edit"}
        data = {patientInfo}
        button={"Save Changes"}
        buttonFunc = {handleSave}
        handleChange={handleChange}
        formData = {formData}
      />}
      <br/>
      <br/>
      
      <History 
        type={"patient"}
        data = {historyData}
        headers = {["DATE", "DOCTOR", "DIAGNOSIS", ""]}
      />
        {/* Medical Records */}
      <br/>
      <br/>
    </div>
    </>
  )
}

