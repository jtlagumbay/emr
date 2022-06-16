import React from 'react'

export default function PatientInfo({data, button}) {
  
  function renderButton(){
    if(button.toLowerCase() ==="edit profile"){
      return <button className="button primary">Edit Profile</button>
    }
    else if(button.toLowerCase() === "add diagnosis"){
      return <button className="button primary">Add diagnosis</button>
    }

  }

  return (
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
                  <td>{data.bday}</td>
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
  )
}
