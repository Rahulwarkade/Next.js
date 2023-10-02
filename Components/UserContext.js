'use client'
import React from 'react'
import { createContext } from 'react';
import {useState} from 'react';

export const User = createContext(null);

const UserContext = ({children}) => {

  const [users,setUser] = useState(JSON.parse(localStorage.getItem("user")) || []);
  return (
    <>
    <User.Provider value={[users,setUser]}> { children } </User.Provider>
    </>
  )
}

export default UserContext