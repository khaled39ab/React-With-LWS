import React from 'react';

const CountryInfo = ({country}) => {
    const {name, area, population, flags} = country;

    const countryStyle={
        color: 'crimson',
        backgroundColor: 'burlywood',
        border: '2px solid cadetblue',
        borderRadius: '20px',
        padding: '10px'
    }

    const imgStyle = {
        width: '150px'
    }
    return (
        <div style={countryStyle}>
            <h3>Name: {name.common}</h3>
            <h4>Area: {area} sq.km</h4>
            <h4>Population: {population}</h4>
            <img style={imgStyle} src={flags.svg} alt="" />
        </div>
    );
};

export default CountryInfo;