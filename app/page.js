"use client"
import React, { Fragment, useState } from 'react'

const page = () => {
  const [value, setvalue] = useState(0)

  const change = ()=>{
    setvalue(24)
    console.log(value);
  }
  return (
   <Fragment>
    <h1>This is next-react {value}.</h1>
    <button onClick={change}>Change</button>
   </Fragment>
  )
}

export default page