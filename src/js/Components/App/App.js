import React from "react";
import {Header} from "../Header";
import data from '../../data/data.json';
import {Place} from '../Place';
import images from '../../data/images';
import {createBrowserHistory} from 'history';
import {SearchResults} from '../Header/SearchResults';
import {Home} from '../Home';

const history = createBrowserHistory();

import {Router, Route, Link, Switch} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data
    }
  }

  render() {
    let {items} = this.state;
    console.log(images[0].src);

    return (
      <Router history={history}>
        <div className="app-container">

          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/results" exact component={SearchResults}/>
          </Switch>

        </div>
      </Router>
    );

  }
}
