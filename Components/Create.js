import React from "react";

const Create = (props) => {
  const {
    title,
    setTitle,
    discription,
    setDiscription,
    status,
    setStatus,
    submitHandler,
    active,
    setActive,
  } = props;
  return (
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

      {active !== null ? (
        <button type="submit" className="btn btn-primary mt-3">
          Update
        </button>
      ) : (
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      )}
    </form>
  );
};

export default Create;
