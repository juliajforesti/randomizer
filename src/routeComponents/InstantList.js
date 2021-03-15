import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import MultiSelectInput from "../components/MultiSelectInput";

const InstantList = (props) => {
  const history = useHistory();

  const [input, setInput] = useState({
    students: [],
  });

  function handleSubmit(e, input) {
    e.preventDefault();
    localStorage.setItem("selectedCohort", JSON.stringify(input));
    props.setSelected(JSON.parse(localStorage.getItem("selectedCohort")));
    history.push("/random-order");
  }

  return (
    <div>
      <h4 className="text-light container">Create your own list!</h4>
      <p className="text-light container">It will not be saved to the database, but you will be able to use all features after saving it. </p>
      <form className="p-5" onSubmit={(e) => handleSubmit(e, input)}>
        <label className="text-light" htmlFor="students">
          Names:
        </label>

        <MultiSelectInput input={input} setInput={setInput} />

        <button className="btn btn-light mx-2" type="submit">
          Save
        </button>
        <button className="btn btn-light mx-2" onClick={() => history.goBack()}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default InstantList;
