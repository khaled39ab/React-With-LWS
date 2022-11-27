import axios from 'axios';
import React, { Fragment } from 'react';
import { useState } from 'react';
import CountryInfo from './CountryInfo';
import HttpNavbar from './HttpNavbar';
import SearchCountry from './SearchCountry';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries,setFilteredCountries] = useState(countries);

    const countriesStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '25px',
        padding: '15px'
    }

    axios.get('https://restcountries.com/v3.1/all')
        .then(res => {
            setCountries(res.data);
            setFilteredCountries(res.data)
        })
        .catch(err => {
            console.log(err);
        });

    const handleSearch = searchValue =>{
        let value = searchValue.toLowerCase();
        const newCountries = countries.filter(country => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value);
        });
        setCountries(newCountries)
        // console.log(newCountries);
        // console.log(filteredCountries);
    }

    return (
        <Fragment>

            <HttpNavbar></HttpNavbar>

            <section>
                <h1 style={{ color: 'brown', fontSize: '3rem', textAlign: 'center', marginTop: '20px' }}>Introduce Country</h1>
                <SearchCountry onSearch={handleSearch}></SearchCountry>
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
            </section>

        </Fragment>
    );
};

export default Countries;