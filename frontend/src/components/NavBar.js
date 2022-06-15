import React from 'react'
import ArrowLeft from "../assets/navbar/arrow-left-solid.svg"
import User from "../assets/navbar/user-solid.svg"
import './NavBar.css'
import Logout from "../assets/navbar/logout.svg"
import Logo from "../assets/navbar/logo.png"
import './NavBar.css'
import { useNavigate,useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'


export default function ({type, withBack, data}) {
  const navigate = useNavigate()

  const doctorInfo = {name:"Stephen Strange", specialization:"Neurosurgery"}


  function logout(){
    toast("Logging out...",{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration:3000
        })
    setTimeout(()=>{
      navigate("/")
    }, 3000)
  }
  if(type==="patient")
  {return (
    <div className="navbar">
      <div className="navbar-item"> 
        {withBack&&(<button onClick={()=>navigate(-1)} className="navbar-logout">
          <img src={ArrowLeft} alt ="back" className="arrow-icon"/> 
        </button>)  }    
        <h1 className="navbar-header">Patient Portal</h1>        
      </div>
      <div>
        <img src={Logo} alt ="back" className="navbar-logo"/>
      </div>
      <div className="navbar-item">
        <img src={User} alt ="back" className="arrow-icon"/>
        <h1 className="navbar-name">{data.name}</h1>
        <button onClick={logout} className="navbar-logout">
          <img src={Logout} alt ="back" className="arrow-icon logout"/>
        </button>
        
      </div>
    </div>
  )}
  else if(type==="doctor")
  {return (
    <div className="navbar">
      <div className="navbar-item"> 
        {withBack&&(<button onClick={()=>navigate(-1)} className="navbar-logout">
          <img src={ArrowLeft} alt ="back" className="arrow-icon"/> 
        </button>)  }    
        <h1 className="navbar-header">Doctor Portal</h1>        
      </div>
      <div>
        <img src={Logo} alt ="back" className="navbar-logo"/>
      </div>
      <div className="navbar-item">
        <img src={User} alt ="back" className="arrow-icon"/>
        <div>
          <h1 className="navbar-name">{doctorInfo.name}</h1>
          <h3 className="navbar-subtitle">{doctorInfo.specialization}</h3>
        </div>
        
        <button onClick={logout} className="navbar-logout">
          <img src={Logout} alt ="back" className="arrow-icon logout"/>
        </button>
        
      </div>
    </div>
  )}
}
