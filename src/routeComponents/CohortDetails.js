import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../components/ConfirmationModal";

const CohortDetails = (props) => {
  const { cohort } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function handleModalClose() {
    setShowModal(false);
  }

  useEffect(() => {
    if (cohort) {
      setIsLoading(false);
    }
  }, [cohort]);
  function renderPage() {
    if (isLoading) {
      return <h2 className="text-light">LOADING...</h2>;
    }
    return (
      <div>
        <h1>
          {cohort.course}-{cohort.startMonth}
          {cohort.startYear}
        </h1>
        <div className="students-list">
          {cohort.students.map((student, i) => (
            <p key={i} className="text-light">
              {i + 1}. {student}
            </p>
          ))}
        </div>
        <Link
          className="btn btn-light mx-1"
          to={`/randomizer/cohort-edit/${cohort._id}`}
        >
          Edit
        </Link>
        <button
          className="btn btn-danger mx-1"
          onClick={() => {
            setShowModal(true)
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  return (
    <div>
      {renderPage()}
      <ConfirmationModal show={showModal} handleClose={handleModalClose} action={`/randomizer/cohort-delete/${cohort._id}`} />
    </div>
  )
  // return (
  //   <div>
  //     {isLoading ? (
  //       <h2 className="text-light">LOADING...</h2>
  //     ) : (
  //       <div>
  //         <h1>
  //           {cohort.course}-{cohort.startMonth}
  //           {cohort.startYear}
  //         </h1>
  //         <div className="students-list">
  //           {cohort.students.map((student, i) => (
  //             <p key={i} className="text-light">
  //               {i + 1}. {student}
  //             </p>
  //           ))}
  //         </div>
  //         <Link
  //           className="btn btn-light mx-1"
  //           to={`/randomizer/cohort-edit/${cohort._id}`}
  //         >
  //           Edit
  //         </Link>
  //         <Link
  //           className="btn btn-danger mx-1"
  //           to={`/randomizer/cohort-delete/${cohort._id}`}
  //         >
  //           Delete
  //         </Link>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default CohortDetails;
