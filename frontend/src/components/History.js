import React from 'react'

export default function History({data, headers}) {

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
      {rowData.map((data, index2) => 
      <td key={index+index2} data-heading={data.key}>{data.val}</td>)}
      <td key={index+"button"} ><button className="his-button">View Details</button></td>
    </tr>

  })

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
            {rows}
        </tbody>
      </table>
    </div>
  )
}
