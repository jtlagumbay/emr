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
    var data = qs.stringify({
      username: "drLaLa123",
      password: "1234",
    });
    var config = {
      method: "post",
      url: "http://localhost:5000/emr/api/doctors/login",
      headers: {
        api_key: "erty123",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("_id", response.data._id);
        localStorage.setItem("type", "doctor");
        toast.success(response.data.message.toUpperCase());
      })
      .catch(function (error) {
        console.log(error);
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
          />
        </div>
        <div className="input-group">
          <img src={Password} alt="Password" className="input-logo" />
          <input
            name="password"
            placeholder="Password"
            className="input-field"
          />
        </div>
      </div>
      <div className="btn-cont">
        <button
          onClick={() => {
            navigate("/login/doctor/menu");
          }}
          className="btn prim"
        >
          Login
        </button>
      </div>
    </div>
  );
}
