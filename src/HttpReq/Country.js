import axios from 'axios';
import React, { Fragment } from 'react';
import { useState } from 'react';
import CountryInfo from './CountryInfo';
import HttpNavbar from './HttpNavbar';

const Country = () => {
    const [countries, setCountries] = useState([]);

    const countriesStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '25px',
        padding: '15px'
    }
    axios.get('https://restcountries.com/v3.1/all')
        .then(res => {
            setCountries(res.data);
        })
        .catch(err => {
            console.log(err);
        });

    return (
        <Fragment>

            <HttpNavbar></HttpNavbar>

            <div>
                <h1 style={{ color: 'brown', fontSize: '3rem', textAlign: 'center', marginTop: '20px' }}>Introduce Country</h1>
                <div style={countriesStyle}>
                    {
                        countries.map(country =>
                            <CountryInfo
                                country={country}
                                key={country.cca3}
                            ></CountryInfo>
                        )
                    }
                </div>
            </div>

        </Fragment>
    );
};

export default Country;