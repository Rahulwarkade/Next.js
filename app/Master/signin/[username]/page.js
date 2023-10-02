import React from 'react'

const page = (props) => {
    const username = props.params.username;
  return (
    <div className="contianer">
      <h3 className="text-center text-danger">
        Hii {username}!!!
      </h3>
    </div>
  )
}

export default page