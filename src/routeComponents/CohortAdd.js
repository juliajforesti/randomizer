import React from "react";
import Form from "../components/Form";
import api from "../apis/cohortApi";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CohortAdd = (props) => {
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
      await api.post("/cohort-create", input);
      history.push('/')
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <Form handleSubmit={handleSubmit} input={input} setInput={setInput}/>
    </div>
  );
};

export default CohortAdd;
