import React from "react";
import {About} from "./About";
import {SearchField} from "./SearchField";
import {Router, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div className="header-wrapper">
        <div className="container">
          <div className="main-wrapper">
            <About/>
            <div className="heading-wrapper">
              <h3 className="heading-upper">EXPLORE THE WILD</h3>
              <h1 className="heading-down">UKRAINE {this.props.items}</h1>
            </div>
          </div>
        </div>
        <SearchField/>
      </div>

    );
  }
}
