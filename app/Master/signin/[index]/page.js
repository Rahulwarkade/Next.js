'use client'
import { User } from '@/Components/UserContext';
import React, { useContext } from 'react'

const page = (props) => {
    const userIndex = props.params.index;
    const [users,setUser] = useContext(User)
    const {username,name} = users[userIndex];
  return (
    <div className="contianer">
      <h3 className="text-center text-danger">
        Hii {name}!!!
      </h3>
      <h4> 
      your username is = {username}.
      </h4>
    </div>
  )
}

export default page