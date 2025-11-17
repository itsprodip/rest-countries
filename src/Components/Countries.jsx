import React, { use, useState } from "react";
import Country from "./Country";
const Countries = ({ countryPromise }) => {
  const countries = use(countryPromise);

  const [countCountries, setCountCountries] = useState(0);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleCountryClick = () => {
    console.log("btn clicked to be added");
    // console.log(country);
  };


// console.log(handleCountryClick());
  const handleClick = (visited) => {
    if (!visited) {
      setCountCountries(countCountries + 1);
    } else {
      setCountCountries(countCountries - 1);
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-green-500 text-center py-10">
        Here rest countries
      </h1>
      <h1 className="text-2xl font-bold text-green-500 text-center">
        Travelling countries: {countCountries}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            handleClick={handleClick}
            handleCountryClick={handleCountryClick}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
