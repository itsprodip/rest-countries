import React from "react";

const Country = ({ country }) => {
  const { name } = country;
  const { common } = name;
  const {flags}=country;
 
  return (
    <div className="">
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
            <div className="badge badge-outline">
              <button className="btn btn-active">Default</button>
            </div>
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
