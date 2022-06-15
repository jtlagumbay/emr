import React, {useState} from "react";
// import Username from "../../images/username.png";
import Username from "../../assets/patientlogin/username.png";
// import Password from "../../images/password.png"
import Password from "../../assets/patientlogin/password.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "./PatientLogin.css";

export default function PatientLogin() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  console.log(formData)

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
      url: window.$URL+"patients/login",
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
        localStorage.setItem("type", "patient");
        localStorage.setItem("px_id", data._id);
        localStorage.setItem("px_name", data.name);
        localStorage.setItem("px_b_day", data.b_day);
        localStorage.setItem("px_sex", data.sex);
        localStorage.setItem("px_contact_no", data.contact_no);
        localStorage.setItem("px_emergency_name", data.emergency_name);
        localStorage.setItem("px_emergency_no", data.emergency_no);
        localStorage.setItem("px_username", data.username);
        toast.success(response.data.message,{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration:3000
        });
        setTimeout(()=>{
          navigate("/patient/details")
        },3000)
        
      })
      .catch(function (error) {
        console.log(error.response);
        if(error.response.data){
          toast.error(error.response.data.message,{
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
    <div className="portal-container">
      <div>
        <h1 className="header">PATIENT PORTAL</h1>
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
      <div className="button-container">
        <button className="button secondary" onClick={()=>navigate('/patient/signup')}>Sign up</button>
        <button className="button primary" onClick={(e)=>login(e)}>Login</button>
      </div>
    </div>
  );
}
