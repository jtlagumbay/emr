import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../../components/NavBar'
export default function DoctorViewDiagnosis() {
   const {state} = useLocation()
  console.log(state)
 return (
    <>
      <NavBar 
        type="doctor"
        withBack={true}
      />
    <div className="container">
      <br/>
      <h1 className="page-title">Medical Diagnosis</h1>
      <br/>

      <div className="section">
            <table className="table table-lg table-responsive">
              <tbody>
                <tr>
                  <th scope="row" width={100}>Date</th>
                  <td>{state.date}</td>
                </tr>
                <tr>
                  <th scope="row">Doctor</th>
                  <td>{state.doctor}</td>
                </tr>
              </tbody>
            </table>
      </div>
      <br/>
      <br/>
      <div className="section-cols">
      <div className="section cols mr">
        <h1 className="section-title">Diagnosis</h1>
        <div>
          {state.diagnosis.map((data, index)=><>
            <span>{index+1}.) {data}</span><br/>
          </>)}
        </div>
      </div>
      <br/>
      <br/>
      <div className="section cols">
        <h1 className="section-title">Prescription</h1>
        <div>
          {state.prescription.map((data, index)=><>
            <span>{index+1}.) {data}</span><br/>
          </>)}

        </div>
      </div>
      </div>

        {/* <div className="sinput-group">
        <img src={Search} alt="Search Patient Name" className="sinput-logo" />
        <input
          name="search"
          placeholder="Search Patient Name"
          className="sinput-field"
        />
      </div>
      <br />
      <PatientInfo data={patientInfo} button={"Add Diagnosis"} />
      <br />
      <br />

      <History data={history} headers={["DATE", "DOCTOR", "DIAGNOSIS", ""]} />
      <br />
      <br /> */}
    </div>
    </>
  );
}
