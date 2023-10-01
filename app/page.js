"use client";
import React, { Fragment, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {toast} from "react-toastify";
const page = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [status, setStatus] = useState("due");
  const [tasks, setTasks] = useState([]);
  const [active,setActive] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      discription,
      status,
      date: new Date().toLocaleDateString(),
    };

    if(newTask.title.length<5 || newTask.discription.length<10){

      toast("title or discription size is very less!!!");
      return;
    }
    setTasks([...tasks, newTask]);

    setTitle("");
    setDiscription("");
    setStatus("due");
    setActive(null);
  };

  let tasklist = (
    <h2 className="mt-5 w-100 text-center text-danger">Loading....</h2>
  );
  const deleteHandler = (index) => {
    setTasks(tasks.filter((task, idx) => idx !== index));
  };

  const updateHandler = (index) => {

    const updatedTask = {
      title : tasks[index].title,
      discription : tasks[index].discription,
      date : tasks[index].date,
      status : tasks[index].status
    };
    deleteHandler(index);
    setTitle(updatedTask.title);
    setDiscription(updatedTask.discription);
    setStatus(updatedTask.status);
    setActive(index);
  };


  if (tasks.length > 0) {
    tasklist = tasks.map((task, index) => {
      return (
        <div key={index} className="card mt-5" style={{ width: "18rem;" }}>
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.discription}</p>
            <button
              onClick={() => {updateHandler(index);}}
              className="btn btn-sm btn-outline-success"
            >
              Update Task
            </button>
            <button
              onClick={() => deleteHandler(index)}
              className="btn btn-sm btn-outline-danger ml-4"
            >
              Delete Task
            </button>
          </div>
        </div>
      );
    });
  }

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

          {active!==null ? (<button type="submit" className="btn btn-primary mt-3">
            Update
          </button>):(<button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>)}
        </form>
        <div className="d-flex gap-4">{tasklist}</div>
      </div>
    </Fragment>
  );
};

export default page;
