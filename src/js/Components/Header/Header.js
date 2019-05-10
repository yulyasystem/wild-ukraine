import React from "react";
import { About } from "./About";
import { SearchField } from "./SearchField";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-wrapper">
        <div className="container">
          <div className="main-wrapper">
            <About />
            <div className="heading-wrapper">
              <h3 className="heading-upper">EXPLORE THE WILD</h3>
              <h1 className="heading-down">UKRAINE</h1>
            </div>
          </div>
        </div>
        <SearchField/>
      </div>
    );
  }
}
