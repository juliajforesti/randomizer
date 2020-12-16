import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

import api from '../apis/cohortApi'
import Form from "../components/Form";

const CohortEdit = (props) => {
  const history = useHistory();

  const {id} = props.match.params

  const [input, setInput] = useState({
    course: "WDFT",
    campus: "São Paulo",
    startMonth: "JAN",
    startYear: 2020,
    students: [],
  });

  useEffect(() => {
    (async function fetchData(){
      const response = await api.get(`/cohort/${id}`)
      console.log(response)
      setInput({...response.data})
    })()
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await api.patch(`/cohort/${id}`, input);
      localStorage.setItem('selectedCohort', JSON.stringify(result.data.cohort))
      props.setSelected(JSON.parse(localStorage.getItem("selectedCohort")))
      history.push(`/randomizer/cohort/${id}`)
    } catch (err) {
      console.error(err);
    }
  }

  return (  
    <div>
      <Form handleSubmit={handleSubmit} input={input} setInput={setInput} />
    </div>
  );
}

export default CohortEdit;