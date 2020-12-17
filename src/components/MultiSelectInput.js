import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from '../apis/cohortApi'

import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

function CreatableInputOnly(props) {

  // original creatable state
  const [state, setState] = useState({
    inputValue: "",
    value: [],
  });

  useEffect(() => {
    (async function(){
      const response = await api.get(`/cohort/${props.id}`)
      let newState = response.data.students.map(studentName => createOption(studentName))

      setState({...state, value: [...newState]})
    })()
  }, []);


  // updating form input with array of names
  useEffect(() => {
    let studentsList = state.value
      ? [...state.value].map((obj) => obj.value)
      : [];
    props.setInput({ ...props.input, students: studentsList });
    console.log(state)
  }, [state]);

  // original handle functions
  const handleChange = (value, actionMeta) => {
    console.group("Value Changed");
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    setState({ ...state, value });
  };

  const handleInputChange = (inputValue) => {
    setState({ ...state, inputValue });
  };

  const handleKeyDown = (event) => {
    const { inputValue, value } = state;
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        console.group("Value Added");
        console.log(value);
        console.groupEnd();
        if (value) {
          setState({
            ...state,
            inputValue: "",
            value: [...value, createOption(inputValue)],
          });
        } else {
          setState({
            ...state,
            inputValue: "",
            value: [createOption(inputValue)],
          });
        }
        event.preventDefault();
    }
  };

  const { inputValue, value } = state;

  return (
    <CreatableSelect
      className="pb-4"
      components={components}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Type one name and press enter..."
      value={value}
    />
  );
}

export default CreatableInputOnly;
