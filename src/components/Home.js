import React, { useEffect, useState } from "react";

const Home = (props) => {
  const { students, setStudents } = props;
  const [state, setState] = useState([]);

  const handleChange = (event) => {
    let currentInput = "";
    currentInput += event.currentTarget.value;
    let list = currentInput.split(/[^a-zA-Z]+/gm)
    console.log(list)
    setState(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents([...students, ...state]);
    setState('');
  };

  const handleClearSubmit = (event) => {
    setStudents([])
    setState([])
    console.log('handleclear')
  }

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h1 className="pt-3">IronRandomizer</h1>
      <h2 className="form-title my-3">Add your students here</h2>
      <form
        className="form d-flex flex-column align-items-center justify-content-around "
        action=""
        onSubmit={handleSubmit}
      >
        <textarea
          onChange={handleChange}
          className="w-100"
          name="students"
          type="text"
          value={state}
        />
        <button className="btn btn-light" type="submit">
          Add
        </button>
      </form>
      <div className="h-25 w-100 students-list d-flex flex-column flex-wrap align-items-center">
        {students.map((student, i) => (
          <p key={i} className="pl-5">
            <strong>{i + 1}. </strong> {student}
          </p>
        ))}
      </div>
        {students.length > 0 ? (
          <button className='btn btn-light' onClick={handleClearSubmit}>
            Clear all
          </button>
        ) : (<></>)}
    </div>
  );
};

export default Home;
