"use client"
import React, { useContext } from 'react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import { User } from '@/Components/UserContext'
const signup = () => {
  const router = useRouter();
  const [users,setUser] = useContext(User)
  const submitHandler = (e)=>{
    e.preventDefault();
    const name = e.target[0].value;
    const username = e.target[1].value;
    const password = e.target[2].value;
    setUser([...users,{name,username,password}]);

    localStorage.setItem("user",JSON.stringify({name,username,password}));

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