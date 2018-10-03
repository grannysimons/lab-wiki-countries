import React, { Component } from "react";
import './CountryMenu.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

export default class CountryMenu extends Component {
  render() {
    return (
      <div className="listMenu">
        <ul>
          {this.props.list.map((country) => {
            return(<li key = { country.cca3 } onClick = { () => { this.props.select(country.cca3)} } > <Link to={country.cca3}>{ country.flag } <span> { country.name.official } </span></Link></li>);
          })}
        </ul>
      </div>
    );
  }
}
