import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, flag, region } = props.country;
    return (
    
        <div className="country bg-success">
            <h2 className="text-info">This is: {name}</h2>
            <img src={flag} alt="" />
            <h4>Capital is: {capital} <br/> <small>Region: {region}</small></h4>  <h4>Population: {population}</h4>

        </div>
    );
};



export default Country;