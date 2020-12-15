import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../apis/cohortApi";

const Home = (props) => {
  const { cohort, setCohort } = props;
  const [cohortList, setCohortList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function fetchData() {
      const result = await api.get("/cohorts");
      console.log(result.data);
      setCohortList([...result.data]);
      if (result) {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h1>WELCOME!</h1>
      {isLoading ? (
        <h2 className="text-light">LOADING...</h2>
      ) : (
        <div>
          <h2 className="text-light">Select your cohort</h2>
          <ul className="list-box">
            {cohortList.map((item, i) => (
              <Link
                key={i}
                onClick={() => setCohort({ ...item })}
                className="text-light"
                to={`/randomizer/cohort/${item._id}`}
              >
                <li>
                  {item.course}
                  {item.startMonth}
                  {item.startYear}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;