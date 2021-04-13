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
      return (
        <h2 className="text-light">
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </h2>
      );
    }
    return (
      <div>
        <h1>
          {cohort.course}-{cohort.startMonth}
          {cohort.startYear}
        </h1>
        <div className="students-list">
          {cohort.students
            .sort((a, b) => a.localeCompare(b))
            .map((student, i) => (
              <p key={i} className="text-light text-capitalize">
                {i + 1}. {student}
              </p>
            ))}
        </div>
        <Link
          className="btn btn-light mx-1 mt-3"
          to={`/cohort-edit/${cohort._id}`}
        >
          Edit
        </Link>
        {cohort.campus? (
          <button
            className="btn btn-danger mx-1 mt-3"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Delete
          </button>
        ) : <></>}
      </div>
    );
  }

  return (
    <div>
      {renderPage()}
      <ConfirmationModal
        show={showModal}
        handleClose={handleModalClose}
        action={`/cohort-delete/${cohort._id}`}
      />
    </div>
  );
};

export default CohortDetails;
