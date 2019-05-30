import React from "react";
import {Header} from "../Header";
import {Place} from "../Place";
import data from '../../data/data.json';



export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: data
    }
  }
  render(){
    return(
      <div>
      <Header/>
      {< Place
          class = {
            this
              .state
              .items
              .places[0]
              .class
              .toLowerCase()
          }
          name = {
            this.state.items.places[0].name
          }
          region = {
            this.state.items.places[0].region
          }
          photo = {
            this.state.items.places[0].image
          } />}
          </div>
    );
  }
}
