import React from 'react';

const CountryInfo = ({ country }) => {
    const { name, area, population, flags, capital } = country;

    const countryStyle = {
        color: 'white',
        backgroundColor: '#34495e',
        border: '2px solid cadetblue',
        borderRadius: '20px',
        padding: '10px'
    }



    const imgStyle = {
        width: '250px',
        height: '150px',
        marginTop: '10px'
    }

    return (
        <article style={countryStyle} data-hover="countryStyle">
            <style>{`[data-hover="countryStyle"]:hover {
                transform: scale(1.1) ;
            }`}</style>
            <h3>Name: {name.common}</h3>
            <h4>Capital: {capital}</h4>
            <h4>Area: {area} sq.km</h4>
            <h4>Population: {population}</h4>
            <img style={imgStyle} src={flags.svg} alt="" />
        </article>
    );
};

export default CountryInfo;