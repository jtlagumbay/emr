import React, { useEffect, useState, useSyncExternalStore } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { getAllDoctors, loginDoctor } from "../../utilities/apiCalls/doctorAPI";
import { useNavigate } from "react-router-dom";

//css
import "./DoctorLogin.css";

//images
import Username from "../../assets/doctor/un.png";
import Password from "../../assets/doctor/pw.png";

const loginData = {
  username: "",
  password: "",
};
export default function DoctorLogin() {
  localStorage.clear();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async (e) => {
    e.preventDefault();
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify(formData);
    var config = {
      method: "post",
      url: window.$URL+"doctors/login",
      headers: {
        api_key: window.$API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        console.log(response.data);
        let data = await response.data.data.doctor
        localStorage.setItem("type", "doctor");
        localStorage.setItem("doc_id", data._id);
        localStorage.setItem("doc_name", data.name);
        localStorage.setItem("doc_specialization", data.specialization);
        localStorage.setItem("doc_username", data.username);
        toast.success(response.data.message,{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration:3000
        });
        setTimeout(()=>{
          navigate("/doctor/menu")
        },3000)
        
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        if(error.response.data.error){
          toast.error(error.response.data.error,{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration:3000
          })
        } else {
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
    <div className="portal-cont">
      <div>
        <h1 className="head">DOCTOR PORTAL</h1>
      </div>
      <div className="form-group">
        <div className="input-group">
          <img src={Username} alt="Username" className="input-logo" />
          <input
            name="username"
            placeholder="Username"
            className="input-field"
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div className="input-group">
          <img src={Password} alt="Password" className="input-logo" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            onChange={(e)=>handleChange(e)}
          />
        </div>
      </div>
      <div className="btn-cont">
        <button
          onClick={(e) => login(e)}
          className="btn prim"
        >
          Login
        </button>
      </div>
    </div>
  );
}
