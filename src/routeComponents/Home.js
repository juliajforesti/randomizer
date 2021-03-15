import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../apis/cohortApi";
import Searchbar from "../components/Searchbar";

const Home = (props) => {
  const [cohortList, setCohortList] = useState([]);
  const [cohortListOriginal, setCohortListOriginal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function fetchData() {
      const result = await api.get("/cohorts");

      setCohortList([...result.data]);
      setCohortListOriginal([...result.data]);

      if (result) {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleClick(item) {
    localStorage.setItem("selectedCohort", JSON.stringify(item));
    props.setSelected(JSON.parse(localStorage.getItem("selectedCohort")));
  }

  function searchFilter(input) {
    let filtered = cohortListOriginal.filter(
      (item) =>
        item.course.toLowerCase().includes(input) ||
        item.campus.toLowerCase().includes(input) ||
        item.startMonth.toLowerCase().includes(input) ||
        item.startYear.toString().includes(input)
    );
    setCohortList([...filtered]);
  }
  return (
    <div>
      {/* <h1>WELCOME!</h1> */}
      {isLoading ? (
        <h2 className="text-light">LOADING...</h2>
      ) : (
        <div>
          <h2 className="title-color">Select your cohort</h2>
          <Searchbar searchFilter={searchFilter} />
          <ul className="m-3 w-75 m-auto">
            {cohortList.map((item, i) => (
              <Link
                key={i}
                onClick={() => handleClick(item)}
                className="text-light "
                to={`/cohort/${item._id}`}
              >
                <li className="cohorts-list-item p-3">
                  {item.course} - {item.startMonth}
                  {item.startYear} - {item.campus}
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
