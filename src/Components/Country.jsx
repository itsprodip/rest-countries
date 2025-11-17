import React, { useState } from "react";

const Country = ({ country, handleClick, handleCountryClick }) => {
  const { name } = country;
  const { common } = name;
  const { flags } = country;
  // console.log('kala',handleVisitedCountries);

  const [visited, setVisited] = useState(false);

  return (
    <div className={`${visited && "bg-gray-400"}`}>
      <div className="card bg-base-100  space-y-3 shadow-sm">
        <figure>
          <img className="object-cover p-5 h-50" src={flags.png} alt="flags" />
        </figure>
        <div className="card-body ml-3">
          <h2 className="card-title text-xl font-bold">{common}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-sm text-gray-600">
              Capital: {country.capital}
            </div>
            <button
              onClick={() => {
                setVisited(!visited);
                handleClick(visited);
              }}
              className="px-2 py-1 m-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              {visited ? "Visited" : "Not Visited"}
            </button>

            <button onClick={handleCountryClick}>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

// {
//     "flags": {
//         "png": "https://flagcdn.com/w320/sy.png",
//         "svg": "https://flagcdn.com/sy.svg",
//         "alt": "The flag of Syria is composed of three equal horizontal bands of red, white and black. At the center of the white band are two small five-pointed green stars arranged in a horizontal line."
//     },
//     "name": {
//         "common": "Syria",
//         "official": "Syrian Arab Republic",
//         "nativeName": {
//             "ara": {
//                 "official": "الجمهورية العربية السورية",
//                 "common": "سوريا"
//             }
//         }
//     },
//     "capital": [
//         "Damascus"
//     ]
// }
