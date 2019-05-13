import React from "react";
import {Header} from "../Header";
import data from '../../data/data.json';
import {Place} from '../Place';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      
    }
  }

  render() {
    let {items} = this.state;
    console.log(this.state.items.places[0].image);

    return (
      <div className="app-container">
        <Header data={this.state.items}/>
        <Place
          class={this.state.items.places[0].class}
          name={this.state.items.places[0].name}
          region={this.state.items.places[0].region}
          photo={this.state.items.places[0].image}/>
      </div>
    );

  }
}
