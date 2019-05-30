import React from 'react';
import {About} from '../About';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    
    return (
      <div className="header-wrapper">
        <div className="container">
          <div className="main-wrapper">
            <About/>
            That is right path
            <div className="heading-wrapper"></div>
          </div>
        </div>

      </div>
    
    );
  }
}
