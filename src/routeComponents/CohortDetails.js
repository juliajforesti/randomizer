import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CohortDetails = (props) => {
  const { cohort } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cohort) {
      setIsLoading(false);
    }
  }, [cohort]);

  return (
    <div>
      {isLoading ? (
        <h2 className="text-light">LOADING...</h2>
      ) : (
        <div>
          <h1>{cohort.course}{cohort.startMonth}{cohort.startYear}</h1>
          <div>
            {cohort.students.map((student, i) => (
              <p key={i} className='text-light'>{student}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CohortDetails;
