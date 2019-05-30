import React from 'react';
import {SearchResults} from '../../SearchResults';
import {Router, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

export default class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    
  } 
  
  render() {
    return (
      <div>
       
          <div className="search-button--heading">
            <Link to="/results">
              {this.props.title}
            </Link>
            
          </div>
        
        </div>
      
    );
  }
}
