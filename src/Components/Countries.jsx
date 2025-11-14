import React, { use } from 'react';
import Country from './Country';
const Countries = ({countryPromise}) => {
    const countries=use(countryPromise);
    console.log(countries);
    return (
      <div>
        <h1 className="text-4xl font-bold text-green-500 text-center pt-20">
          Here rest countries
        </h1>
        {
            countries.map(country=><Country country={country}></Country>)
        }
      </div>
    );
};

export default Countries;