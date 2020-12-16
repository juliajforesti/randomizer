import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CohortDetails = (props) => {
  const { cohort } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cohort) {
      setIsLoading(false);
    }
  }, [cohort]);

  return (
    <div >
      {isLoading ? (
        <h2 className="text-light">LOADING...</h2>
      ) : (
        <div >
          <h1>{cohort.course}-{cohort.startMonth}{cohort.startYear}</h1>
          <div className='students-list'>
            {cohort.students.map((student, i) => (
              <p key={i} className='text-light'>{i + 1}. {student}</p>
            ))}
          </div>
          <Link className='btn' to={`/randomizer/cohort-edit/${cohort._id}`}>Edit</Link>
        </div>
      )}
    </div>
  );
};

export default CohortDetails;
