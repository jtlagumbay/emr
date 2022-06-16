import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../utilities/common'

import "./PatientInfo.css"

export default function PatientInfo({data, type, button, buttonFunc, handleChange, formData}) {
  const navigate = useNavigate()
  // console.log(data)
  function renderButton(){
    if(button.toLowerCase() ==="edit profile"){
      return <button className="button primary" onClick={buttonFunc}>Edit Profile</button>
    }
    else if(button.toLowerCase() ==="save changes"){
      return <button className="button primary" onClick={e=>buttonFunc(e)}>Save Changes</button>
    }
    else if(button.toLowerCase() === "add diagnosis"){
      return <button className="button primary" onClick={()=>navigate("/doctor/add-diagnosis/"+data.id)}>Add diagnosis</button>
    } else{
      return <button className="button primary" style={{display:"none"}} onClick={()=>navigate("/doctor/add-diagnosis/"+data.id)}>Add diagnosis</button>
    }
  }

  if(type==="edit"){
    
    return (
    <div className='section'>
        <div className="d-flex flex-row justify-content-between mb-3">
          <h3 className='section-title m-0'>Edit Patient Details</h3>
          {renderButton()}
        </div>
        
        {/* Patient Details */}
        <div className="d-flex flex-row">
          <div className="d-flex flex-column section-table">
            <table className="table table-lg table-responsive">
              <tbody>
                <tr>
                  <th scope="row" width={100}>Name</th>
                  <td><input className="edit-input" name="name" onChange={(e)=>handleChange(e)} value={formData.name}></input></td>
                </tr>
                <tr>
                  <th scope="row">Birthdate</th>
                  <td><input type="date" className="edit-input" name="b_day" onChange={(e)=>handleChange(e)} value={formData.b_day}></input></td>
                </tr>
                {/* <tr>
                  <th scope="row">Age</th>
                  <td>{data.age}</td>
                </tr> */}
                <tr>
                  <th scope="row">Sex</th>
                  <td><select className="edit-input"  name="sex" onChange={(e)=>handleChange(e)} value={formData.sex}>
                    <option value="f">Female</option>
                    <option value="m">Male</option>
                    <option value="b">Binary</option>
                    </select></td>
                </tr>
                <tr>
                  <th scope="row">Contact no.</th>
                  <td><input  className="edit-input" name="contact_no" onChange={(e)=>handleChange(e)} value={formData.contact_no}></input></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column">
            <p className="m-0 section-subtitle">Person to contact in-case of emergency:</p>
            <table className="table table-lg table-responsive">
              <tbody>
                <tr>
                  <th  width={100} scope="row">Name</th>
                  <td><input className="edit-input" name="emergency_name" onChange={(e)=>handleChange(e)} value={formData.emergency_name}></input></td>
                </tr>
                <tr>
                  <th scope="row">Contact No.</th>
                  <td><input className="edit-input" name="emergency_no" onChange={(e)=>handleChange(e)} value={formData.emergency_no}></input></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
  }
  else{ return (
    <div className='section'>
        <div className="d-flex flex-row justify-content-between mb-3">
          <h3 className='section-title m-0'>Patient Details</h3>
          {renderButton()}
        </div>
        
        {/* Patient Details */}
        <div className="d-flex flex-row">
          <div className="d-flex flex-column section-table">
            <table className="table table-lg table-responsive">
              <tbody>
                <tr>
                  <th scope="row" width={100}>Name</th>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <th scope="row">Birthdate</th>
                  <td>{formatDate(data.bday)}</td>
                </tr>
                <tr>
                  <th scope="row">Age</th>
                  <td>{data.age}</td>
                </tr>
                <tr>
                  <th scope="row">Sex</th>
                  <td>{(data.sex==="f")?"Female":(data.sex==="m")?"Male":(data.sex==="b")?"Binary":null}</td>
                </tr>
                <tr>
                  <th scope="row">Contact no.</th>
                  <td>{data.contact_no}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column">
            <p className="m-0 section-subtitle">Person to contact in-case of emergency:</p>
            <table className="table table-lg table-responsive">
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>{data.emergency_name}</td>
                </tr>
                <tr>
                  <th scope="row">Contact No.</th>
                  <td>{data.emergency_contact}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )}
}
