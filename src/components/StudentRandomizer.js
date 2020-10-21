import React, {useState} from 'react';

const StudentRandomizer = () => {
  const studentsList = [
    "Aline",
    "Denis",
    "Denison",
    "Fellype",
    "Guilherme",
    "Hector",
    "Juliana",
    "Laura",
    "Leonardo",
    "Patrick",
    "Rodrigo",
    "Tassia",
    "Thalía",
    "Vitor",
  ];

  const [state, setState] = useState({
    students: [...studentsList],
    picked: "",
    isLoading: false,
  });
  let length = state.students.length;

  const handleClick = (e) => {
    let randomIdx = Math.floor(Math.random() * length);
    let i = 0;

    let interval = setInterval(() => {
      i = (i + 1) % length;
      setState({ ...state, isLoading: true, picked: state.students[i] });
    }, 150);

    setTimeout(() => {
      setState({
        ...state,
        picked: state.students[randomIdx],
        isLoading: false,
      });
      clearInterval(interval);
    }, 4000);
  };


  return (
    <div className="App">
      <h1 className="pt-3">Randomizer</h1>
      <button className="btn my-3 px-5" onClick={handleClick}>
        GO!
      </button>
      <div className="result-box d-flex flex-column align-items-center justify-content-center align-content-center">
        {state.isLoading ? (
          <h2 className="result">{state.picked}</h2>
        ) : (
          <h2 className="result" style={{ color: "#223" }}>
            {state.picked}
          </h2>
        )}
      </div>
    </div>
  );
}
 
export default StudentRandomizer;