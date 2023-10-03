"use client";
import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "@/utils/api.js";
import Show from "@/Components/Show.js";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

const page = () => {
  const [Posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(true);
  const getPost = async () => {
    try {
      const { data } = await axios.get(
        `posts?_limit=15&_start=${Posts.length}`
      );
      data.length === 0 && setMore(false);
      setPosts([...Posts, ...data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
    console.log("API called!!!");
  }, [page]);
  return (
    <>
      <div className="container">
        <h3>Get Show Component here</h3>
        <button onClick={() => setFlag(!flag)} className="btn btn-primary">
          {!flag ? "show" : "hide"}
        </button>
        {flag ? <Show /> : ""}
        <hr />
        <h3>Axios Example </h3>
        <button onClick={getPost} className="btn btn-sm btn-success mt-3">
          Get Posts
        </button>

        <div className="list-group">
          <InfiniteScroll
            dataLength={Posts.length}
            next={getPost}
            hasMore={more}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {Posts.length !== 0
              && Posts.map((post) => (
                  <div
                    key={post.id}
                    className="list-group-item list-group-item-info mt-2 d-flex justify-content-between"
                  >
                    <p>{post.title}</p>
                    <Link href={`/${post.id}`}>Explore</Link>
                  </div>
                ))}
          </InfiniteScroll>
        </div>
        {/* <button
          onClick={() => setPage(page + 1)}
          className="btn btn-success mt-2"
        >
          next
        </button> */}
      </div>
    </>
  );
};

export default page;
