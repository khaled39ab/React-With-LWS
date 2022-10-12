import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import CountryInfo from './CountryInfo';

const Country = () => {
    const [countries, setCountries] = useState([]);

    axios.get('https://restcountries.com/v3.1/all')
        .then(res => {
            setCountries(res.data);
        })
        .catch(err => {
            console.log(err);
        });
        
    return (
        <div>
            <h1 style={{color:'blue'}}>Introduce Country</h1>
            <div>
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
    );
};

export default Country;