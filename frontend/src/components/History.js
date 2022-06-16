import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

export default function History({type, data, headers}) {
  const navigate = useNavigate()
  const {state} = useLocation()

   function renderButton(row){
      if(type==="doctor"){
      return <button onClick={() => {
              navigate("/doctor/view-diagnosis/"+row.id, {state:row});
            }}className="his-button">View Details</button>
      }
      else if(type==="patient"){
        return <button onClick={() => {
          navigate("/patient/view-diagnosis/"+row.id, {state:row});
        }}className="his-button">View Details</button>
      }
    }

  // const rows = data.map((row, index)=>{
  //   let rowData = [];
  //   let i = 0;
    
  //   for(const key in row) {
  //       rowData.push({
  //           key: headers[i],
  //           val: row[key]
  //       });
  //       i++;
  //   }
   
  //   // console.log(rowData)
  //   return <tr key={row.id}>
  //     {rowData.slice(1, 4).map((data, index2) => 
  //     <td key={index+index2} data-heading={data.key}>{Array.isArray(data.val)===true?data.val.map((data, index)=><>
  //       <span>{data}</span><br/>
  //     </>):data.val}</td>)}
  //     <td key={index+"button"} >{renderButton(row)}</td>
  //   </tr>

  // })

  return (
    <div className="section">
      <h3 className='section-title m-0'>Medical History</h3>
      <br/>
      <table className="table table-lg table-responsive">
        <thead>
          <tr>
              {headers.map((col,index) => (
                  <th key={index} className="his-header">{col}</th>
              ))}
          </tr>
        </thead>
        <tbody>
            {data.map((data, index)=>{
              // console.log(data)
              return(
              <tr>
                <td>{data.date}</td>
                <td>{data.doctor}</td>
                <td>{data.diagnosis.map((data, index)=>{
                  return(<>
                    <span>{data}</span><br/></>
                  )
                })}</td>
                <td>{renderButton(data)}</td>
              </tr>

            )})
            }
        </tbody>
      </table>
    </div>
  )
}
