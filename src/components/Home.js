import React, { useState } from "react";

const Home = (props) => {
  const { students, setStudents } = props;
  const [state, setState] = useState("");

  const handleChange = (event) => {
    let currentName = "";
    currentName += event.currentTarget.value;
    setState(currentName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents([...students, state]);
    setState('');
  };

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h1 className="pt-3">IronRandomizer</h1>
      <h2 className="form-title my-3">Add your students here</h2>
      <form
        className="form d-flex flex-column align-items-center justify-content-around "
        action=""
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          className="w-100"
          name="students"
          type="text"
          placeholder="Student's name"
          value={state}
        />
        <button className="btn btn-light" type="submit">
          Add
        </button>
      </form>
      <div className="students-list d-flex flex-column flex-wrap">
        {students.map((student, i) => (
          <p key={i} className="pl-5">
            <strong>{i + 1}. </strong> {student}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
