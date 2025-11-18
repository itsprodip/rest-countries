import React, { use, useState } from "react";
import Country from "./Country";
const Countries = ({ countryPromise }) => {
  const countries = use(countryPromise);

  let [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedFlag = (country) => {
    const newVisitedFlag = [country, ...visitedFlag];
    setVisitedFlag(newVisitedFlag);
  };
  const handleUnvisitedFlag = (country) => {
    visitedFlag = visitedFlag.filter((item) => item !== country);
    const newVisitedFlag = [...visitedFlag];
    setVisitedFlag(newVisitedFlag);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-500 text-center py-10">
        Here rest countries
      </h1>

      <h1 className="text-2xl font-bold text-green-500 text-center">
        Visited Flags: {visitedFlag.length}
      </h1>
      <ol>
        {visitedFlag.map((countryFlag) => (
          <li>{countryFlag}</li>
        ))}
      </ol>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            handleVisitedFlag={handleVisitedFlag}
            handleUnvisitedFlag={handleUnvisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
