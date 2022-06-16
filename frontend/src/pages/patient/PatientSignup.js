import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import '../patient/PatientLogin.css'

export default function PatientSignup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    b_day: "",
    sex: "",
    contact_no: "",
    emergency_name: "",
    emergency_no: "",
    username: "",
    password: "",
  });

   const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(formData)
  const signup = async (e) => {
    e.preventDefault();
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify(formData);
    var config = {
      method: "post",
      url: window.$URL+"patients/create",
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
        setTimeout(()=>{
          navigate("/patient/login")
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
  };



  return (
    <div className="container portal-container">
      <div >
        <h1 className="header">PATIENT PORTAL</h1>
      </div>
      <br/>
      <div className="container">
        <p className="p-0 m-0 subheader">Personal Details:</p>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
            <br />
            <input 
              name="name"
              placeholder='ex: Juan Dela Cruz'
              className="input-form"
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label>Birthdate</label>
            <br />
            <input 
              name="b_day"
              type="date"
              placeholder='ex: Juan Dela Cruz'
              className="input-form"
              onChange={(e)=>handleChange(e)}
            />
          </div>
        
        </div>
        <br/>
        <div className="row">
          <div className="col-md-6">
            <label>Sex at Birth</label>
            <br />
            <input 
              name="sex"
              type="radio"
              id="f"
              value="f"
              onChange={(e)=>handleChange(e)}
            />            
            <label htmlFor='f' className="radio-label">F</label>
            <input 
              name="sex"
              type="radio"
              id="m"
              value="m"
              onChange={(e)=>handleChange(e)}
            />
            <label htmlFor='m' className="radio-label">M</label>
            <input 
              name="sex"
              type="radio"
              id="b"
              value="b"
              onChange={(e)=>handleChange(e)}
            />
            <label htmlFor='b' className="radio-label">B</label>
          </div>
          <div className="col-md-6">
            <label>Contact Number</label>
            <br />
            <input 
              name="contact_no"
              placeholder='ex: 09123456789'
              className="input-form"
              onChange={(e)=>handleChange(e)}
            />
          </div>
        </div>
        <br />
        <p className="p-0 m-0 subheader">In case of emergency, contact:</p>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
            <br />
            <input 
              name="emergency_name"
              placeholder='ex: Teodora Dela Cruz'
              className="input-form"
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label>Contact number</label>
            <br />
            <input 
              name="emergency_no"
              placeholder='ex: 09123456789'
              className="input-form"
              onChange={(e)=>handleChange(e)}
            />
          </div>
        </div>
        <br/>
        <p className="p-0 m-0 subheader">Login Credentials:</p>
        <div className="row">
          <div className="col-md-6">
            <label>Username</label>
            <br />
            <input 
              name="username"
              placeholder='ex: jdelacruz'
              className="input-form"
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label>Password</label>
            <br />
            <input 
              name="password"
              type="password"
              placeholder='ex: P@ssw0rD'
              className="input-form"
              onChange={(e)=>handleChange(e)}
            />
          </div>
        </div>
        
      
      </div>

    <br/>
      <div className="button-container">
        <button className="button primary" onClick={(e)=>{signup(e)}}>Sign up</button>
      </div>
    </div>

  )
}
