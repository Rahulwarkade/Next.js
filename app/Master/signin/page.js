'use client'
import React, { useContext} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { User } from '@/Components/UserContext';
const singin = () => {
  const router = useRouter();
  const [users,setUser] = useContext(User)
  const submitHandler = (e)=>{
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const isUser = users.filter((user)=>user.username === username && user.password===password)[0];

    if(isUser)
    {
      const index = users.findIndex((user)=>user==isUser);
       router.push(`/Master/signin/${index}`);
    }
    else{
      alert("User not found ");
    }
  }
  return (
    <>
    <div className="container mt-3">
    <h1>Sign in</h1>
    <form onSubmit={submitHandler}>
      <input type="text"  placeholder='username' className='form-control mt-3'/>
      <input type="password"  placeholder='password' className='form-control mt-3'/>
      <button  type="submit" className="mt-3 btn btn-primary">sign in</button>
    </form>
    </div>
    </>
  )
}

export default singin