import React from "react";

const Country = ({ country }) => {
  const { name } = country;
  const { common } = name;
  const {flags}=country;
  console.log(flags);
  return (
    <div className="">
      
      <div className="card bg-base-100  space-y-3 shadow-sm">
        <figure>
          <img className="object-cover p-5 h-50"
            src={flags.png}
            alt="flags"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {common}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
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
