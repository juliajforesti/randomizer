import React from "react";
import Form from "../components/Form";
import api from "../apis/cohortApi";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddCohort = (props) => {
  const history = useHistory();

  const [input, setInput] = useState({
    course: "WDFT",
    campus: "São Paulo",
    startMonth: "JAN",
    startYear: 2020,
    students: [],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await api.post("/cohort-create", input);
      console.log(result);
      history.push('/randomizer')
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <Form handleSubmit={handleSubmit} input={input} setInput={setInput} />
    </div>
  );
};

export default AddCohort;
