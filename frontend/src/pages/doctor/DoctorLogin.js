import React, {useEffect, useState, useSyncExternalStore} from 'react'
import toast from 'react-hot-toast'
import {useForm} from "react-hook-form"
import { getAllDoctors, loginDoctor } from '../../utilities/apiCalls/doctorAPI'


const loginData = {
  username:"",
  password:"",
}
export default function DoctorLogin() {

  const [formData, setFormData] = useState({
    username:"",
    password:""
  })

  const {username, password} = formData

  const handleChange = (e) => {
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const login = async (e) =>{
    e.preventDefault()
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'username': 'drLaLa123',
      'password': '1234' 
    });
    var config = {
      method: 'post',
      url: 'http://localhost:5000/emr/api/doctors/login',
      headers: { 
        'api_key': 'erty123', 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem("_id", response.data._id)
      localStorage.setItem("type", "doctor")
      toast.success(response.data.message.toUpperCase())
    })
    .catch(function (error) {
      console.log(error);
    });

  }



  return (
    <div>
      <div>
        <h1>DOCTORS PORTAL</h1>
        <form onSubmit={e=>{login(e)}} >
          <input 
            type="text"
            required
            name="username"
            placeholder='Username'
            onChange={e=>{handleChange(e)}}
          />
          <br/>
          <input 
            type="password"
            required
            name="password"
            placeholder='Password'
            onChange={e=>{handleChange(e)}}
          />
          <br/>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}
