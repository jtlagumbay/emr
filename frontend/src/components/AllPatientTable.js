import React from 'react'
import { useNavigate } from 'react-router-dom';

import "./AllPatientTable.css"

export default function AllPatientTable({data, headers}) {
  const navigate = useNavigate();

  const rows = data.map((row, index)=>{
    let rowData = [];
    let i = 0;
    
    for(const key in row) {
        rowData.push({
            key: headers[i],
            val: row[key]
        });
        i++;
    }

    return <tr key={row.id}>
      {rowData.splice(1).map((data, index) => 
      <td key={index} data-heading={data.key} className="p-2">{data.val}</td>)}
      <td key={index+"button"} className="p-2 text-center"><button className="his-button" onClick={()=>{navigate("/doctor/view/"+row.id)}}>View Details</button></td>
    </tr>

  })

  return (
    <div className="display">
      <table className="display-table table table-lg table-responsive ">
        <thead className="display-thead">
          <tr>
              {headers.map((col,index) => (
                  <th key={index} className="display-th p-2" >{col}</th>
              ))}
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    </div>
  )
}
