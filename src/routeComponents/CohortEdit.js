import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../apis/cohortApi";
import Form from "../components/Form";

const CohortEdit = (props) => {
  const history = useHistory();

  const { id } = props.match.params;

  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState({
    course: "WDFT",
    campus: "São Paulo",
    startMonth: "JAN",
    startYear: 2020,
    students: [],
  });

  const changeFormat = (label) => ({
    label,
    value: label,
  });

  useEffect(() => {
    (async function fetchData() {
      const response = await api.get(`/cohort/${id}`);
      setInput({
        ...response.data,
        students: changeFormat(response.data.students),
      });
    })();
  }, []);

  // setting loading to false
  useEffect(() => {
    setIsLoading(false);
  }, [input]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await api.patch(`/cohort/${id}`, input);
      localStorage.setItem(
        "selectedCohort",
        JSON.stringify(result.data.cohort)
      );
      props.setSelected(JSON.parse(localStorage.getItem("selectedCohort")));
      history.push(`/randomizer/cohort/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      {isLoading ? (
        <p className="text-light">LOADING...</p>
      ) : (
        <Form
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
          id={id}
        />
      )}
    </div>
  );
};

export default CohortEdit;
