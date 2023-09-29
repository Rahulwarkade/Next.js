"use client"
import React, { Fragment, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const page = () => {
  
  return (
   <Fragment>
    <div className="container">
      <input type="text" className = "form-control mt-5" placeholder= "Title" />
      <textarea name="task" id="task" placeholder = "discription here ....." className='form-control mt-3 '></textarea>
      <select className="form-control  mt-3" >
        <option value="Due">Due</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className='btn btn-primary mt-3'>Submit</button>
    </div>
   </Fragment>
  )
}

export default page