import React, { useState, useEffect } from "react";
import PatientInfo from "../../components/PatientInfo";
import History from "../../components/History";
import Search from "../../assets/doctor/sicon.png";
import NavBar from '../../components/NavBar';
import toast from "react-hot-toast";
import { getAge } from "../../utilities/common";
import { useNavigate } from "react-router-dom";
export default function DoctorSearch(){
  document.body.style = "background: white;";
  const navigate = useNavigate()
  const [searchName, setSearchName] = useState("")
  const [patients, setPatients] = useState([])
  const [isLoading, setIsLoading] = useState(true)
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

        if(index===response.data.length-1){
          setIsLoading(false)
        }
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

  useEffect(()=>{

  },[searchName])


  const [result, setResult] = useState([])
  function handleSearch(){
    const test = new RegExp(searchName.toLowerCase())
   const result = patients.filter(info=>test.test(info.name.toLowerCase()))
  setResult(result)
  }


  return (
    <>
    <NavBar 
        type="doctor"
        withBack={true}
      />
    <div className="container">
        <div className="sinput-group">
          <button className="search-btn" onClick={handleSearch}><img src={Search} alt="Search Patient Name" className="sinput-logo" /></button>
        
        <input
          name="search"
          placeholder="Search Patient Name"
          className="sinput-field"
          onChange={(e)=>{setSearchName(e.target.value)}}
          disable={isLoading}
        />
        </div>
        <div className="results-group">
  
          {result.length>0
          ?
          result.map((data, index)=>{
          return(
          <>
            <button className="button secondary border item-number result"onClick={()=>navigate("/doctor/view/"+data.id)}>{data.name}</button>
            <br/><br/>
          </>)
          })
          :
          isLoading?<h3 className="item-number">Loading data... Please wait for a while</h3>
          :<h3 className="item-number">Patient not found!</h3>}
        </div>
    </div>
    </>
  );
}