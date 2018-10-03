import React, { Component } from 'react';
import './App.css';
import CountryMenu from './components/CountryMenu/CountryMenu';
import CountryDetail from './components/CountryDetail/CountryDetail';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    countryList: countries,
    countryCode: '',
  }
  selectCountry = (cca3) => {
    let countryCode = cca3; 
    console.log('selectCountry: ', countryCode);
    this.setState({ countryCode });
  }
  
  
  render() {
    const CountryDetailComp = ({ match }) => {
      return <CountryDetail country = { match.params.countryCode } />
    }
    return (
      <BrowserRouter>
        <div className="App row">
          <div className="container-fluid title">WikiCountries</div>
          <div className="countryMenu col-4">
            <CountryMenu list={ this.state.countryList } select = { this.selectCountry }/>
          </div>
          <div className="countryDetail col-8">
            <Route path={'/:countryCode'} component={CountryDetailComp} />  
            {/* <CountryDetail country = { this.state.countryCode }/> */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
