import React, { use } from 'react';
import Country from './Country';
const Countries = ({countryPromise}) => {
    const countries=use(countryPromise);
    console.log(countries);
    return (
      <div>
        <h1 className="text-4xl font-bold text-green-500 text-center py-10">
          Here rest countries
        </h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
           {

            countries.map(country=><Country key={country.name.common} country={country}></Country>)
        }
        </div>
     
      </div>
    );
};

export default Countries;