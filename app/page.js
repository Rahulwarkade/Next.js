'use client'
import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "@/utils/api.js";
import Show from "@/Components/Show.js"
import { list } from "postcss";
const page = () => {
  const [Posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false)

  const getPost = async ()=>{
    try {
      const {data} = await axios.get("/posts?_limit=10");
      setPosts(data);
      console.log(data  )
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="container">
        <h3>Get Show Component here</h3>
        <button onClick={()=>setFlag(!flag)} className="btn btn-primary">
          {(!flag)?"show":"hide"}
        </button>
        {(flag)?<Show/> : ""}
        <hr />
        <h3>Axios Example </h3>
        <button onClick={getPost} className="btn btn-sm btn-success mt-3">Get Posts</button>

        <ul className="list-group">
        {Posts.length!=0 ? Posts.map((post)=> <li className="list-group-item list-group-item-info mt-2">{post.title}</li>) : "posts is loading here...."}
        </ul>

      </div>
    </>
  );
};

export default page;

