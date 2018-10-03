import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './CountryDetail.css';
import countries from '../../countries';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

export default class CountryDetail extends Component {
  getCountryData = (cca3) => {
    let countryData = countries.filter(country => country.cca3 === cca3 );
    if(countryData.length > 0) return countryData[0];
    else return '';
  }
  printCountryDetail(country)
  {
    if (!country) return(null);
    else if(country === '') return (null);
    else return(
      <div>
        <h1>{ country.name.official }</h1>
        <div className="capital row">
          <div className="col-4">Capital</div>
          <div className="col-8">{ country.capital.map((capital) =>  capital,', ' ) }</div>
        </div>
        <div className="area row">
          <div className="col-4">Area</div>
          <div className="col-8">{ country.area } km<sup>2</sup></div>
        </div>
        <div className="borders row">
          <div className="col-4">Borders</div>
          <div className="col-8">
            <ul>
              {
                country.borders.map( (code) => {
                  let countryData = this.getCountryData(code);
                  return(<li key={code}><Link to={code}>{countryData.name.official}</Link></li>);
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
  render() {
    let country = this.getCountryData(this.props.country);
    console.log('cca3: ', country);
    return (
      <div className="countryDetail">
        { (country) ? this.printCountryDetail(country) : null }
      </div>
    )
  }
}
