"use client";
import React, { Fragment, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

import Create from "@/Components/Create.js";
import { Show } from "@/Components/Show.js";
const page = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [status, setStatus] = useState("due");
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      discription,
      status,
      date: new Date().toLocaleDateString(),
    };

    if (newTask.title.length < 5 || newTask.discription.length < 10) {
      toast("title or discription size is very less!!!");
      return;
    }
    setTasks([...tasks, newTask]);

    setTitle("");
    setDiscription("");
    setStatus("due");
    setActive(null);
  };

  const deleteHandler = (index) => {
    setTasks(tasks.filter((task, idx) => idx !== index));
  };
  const updateHandler = (index) => {
    const updatedTask = {
      title: tasks[index].title,
      discription: tasks[index].discription,
      date: tasks[index].date,
      status: tasks[index].status,
    };
    deleteHandler(index);
    setTitle(updatedTask.title);
    setDiscription(updatedTask.discription);
    setStatus(updatedTask.status);
    setActive(index);
  };

  return (
    <Fragment>
      <div className="container">
        <Create
          title={title}
          setTitle={setTitle}
          discription={discription}
          setDiscription={setDiscription}
          status={status}
          setStatus={setStatus}
          active={active}
          setActive={setActive}
          submitHandler={submitHandler}
        />
        <Show
          tasks={tasks}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </Fragment>
  );
};

export default page;
