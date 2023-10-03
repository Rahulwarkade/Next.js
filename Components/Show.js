'use client'
import React, { useEffect, useState } from 'react'

const Show = () => {
  const [value, setValue] = useState(0);
  const [page,setPage] = useState(0);
  useEffect(()=>{
    console.log("Show component is created");
    return ()=>{
      alert("Do you want to leave this page");
      console.log("show component is destructed!!!");
    }
  },[page])

  return (
  <>
      <div>This is Show Components</div>
      <h1>{value}</h1>
      <button onClick = {()=> setValue(value+1)} className="btn btn-danger">change value</button>

      <h2>page No. {page}</h2>
      <button onClick={()=>setPage(page+1)} className='btn btn-sm btn-dark'>change page</button>
  </>
  )
}

export default Show