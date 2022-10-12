import React from 'react';

const CountryInfo = ({country}) => {
    const {name} = country;
    return (
        <div>
            <li>{name.common}</li>
        </div>
    );
};

export default CountryInfo;