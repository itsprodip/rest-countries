import React from 'react';

const Country = ({country}) => {
    const {name}=country;
    const {common}=name;
    return (
        <div>
            <h2>Country: {common}</h2>
        </div>
    );
};

export default Country;