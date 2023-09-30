"use client";
import React, { Fragment, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const page = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [status, setStatus] = useState("due");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      discription,
      status,
      date : new Date().toLocaleDateString()
    };
    console.log(newTask);
  };

  return (
    <Fragment>
      <div className="container">
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="form-control mt-5"
            placeholder="Title"
          />
          <textarea
            onChange={(e) => setDiscription(e.target.value)}
            value={discription}
            name="task"
            id="task"
            placeholder="discription here ....."
            className="form-control mt-3 "
          ></textarea>
          <select
            className="form-control  mt-3"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="Due">Due</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>

        <div className="card mt-5" style={{ width: "18rem;" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-sm btn-outline-success">
              Update Task
            </button>
            <button className="btn btn-sm btn-outline-danger ml-4">
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default page;
