"use client"
import React from 'react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
const signup = () => {
  const router = useRouter();
  const submitHandler = (e)=>{
    e.preventDefault();
    router.push('/Master/signin');
  }
  return (
    <>
    <div  className="container">
      <h1>Signup</h1>
    <form onSubmit={submitHandler}>
    <input onChange={(e)=>setName(e.target.value)} type="text"  placeholder='name' className='form-control mt-3'/>
      <input type="text"  placeholder='username' className='form-control mt-3'/>
      <input type="password"  placeholder='password' className='form-control mt-3'/>
      <button  type="submit" className="mt-3 btn btn-primary">signup</button>
    </form>
    </div>
    </>
  )
}

export default signup