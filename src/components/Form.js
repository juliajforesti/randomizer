import React from "react";
import MultiSelectInput from './MultiSelectInput'

const Form = (props) => {
  const { handleSubmit, input, setInput } = props;

  const months = "JAN,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC".split(",");
  const courses = ["WDFT", "WDPT", "DAFT", "DAPT", "UXUIFT", "UXUIPT"];
  const campi = [
    "São Paulo",
    "Paris",
    "Amsterdam",
    "Mexico City",
    "Madrid",
    "Barcelona",
    "Lisbon",
    "Berlim",
    "Miami",
  ];

  function handleInputChange(e) {
    const { name, value } = e.currentTarget;
    setInput({ ...input, [name]: value });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center"
    >
      <div className="form-group w-50">
        <label className="text-light" htmlFor="course">
          Course:
        </label>
        <select
          className="form-control"
          name="course"
          id="course"
          onChange={handleInputChange}
          value={input.course}
        >
          {courses.map((course, i) => (
            <option key={i} value={course}>{course}</option>
          ))}
        </select>
        <label className="text-light" htmlFor="campi">
          Campus:
        </label>
        <select
          className="form-control"
          name="campus"
          id="campus"
          onChange={handleInputChange}
          value={input.campus}
        >
          {campi.map((campus) => (
            <option value={campus}>{campus}</option>
          ))}
        </select>

        <label className="text-light" htmlFor="month">
          Start month:
        </label>
        <select
          className="form-control"
          name="startMonth"
          id="month"
          onChange={handleInputChange}
          value={input.startMonth}

        >
          {months.map((month, i) => (
            <option key={i} value={month}>{month}</option>
          ))}
        </select>

        <label className="text-light" htmlFor="year">
          Start year:
        </label>
        <input
          className="form-control"
          type="number"
          name='startYear'
          onChange={handleInputChange}
          value={input.startYear}
        />

        <label className="text-light" htmlFor="students">
          Students list
        </label>

        <MultiSelectInput input={input} setInput={setInput}/>

        <button className="btn btn-light" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
