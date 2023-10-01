import React from "react";

export const Show = (props) => {
  const tasks = props.tasks;
  const { updateHandler, deleteHandler } = props;
  let tasklist = (
    <h2 className="mt-5 w-100 text-center text-danger">Loading....</h2>
  );
  if (tasks.length > 0) {
    tasklist = tasks.map((task, index) => {
      return (
        <div key={index} className="card mt-5" style={{ width: "18rem;" }}>
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.discription}</p>
            <button
              onClick={() => {
                updateHandler(index);
              }}
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

  return <div className="d-flex gap-4">{tasklist}</div>;
};
