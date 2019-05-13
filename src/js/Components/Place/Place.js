import React from 'react';




export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: this.props.class,
      name: this.props.name,
      region: this.props.region,
      photo: this.props.photo,

    }
  }
  render() {
    return (
    /* data:  photo of place indivialual class for each element like element-nameOfPlace
       places[i].name
    */ <div className = "place-wrapper" > <div className="container">
      <div className="place-content-wrapper">
        <div className={`${this.state.class + '-heading'}`}>{this.state.name}</div>
        <div className={`${this.state.class + '-region--text'}`}>{this.state.region}</div>
        <img src={this.state.photo} alt={`${this.state.name} + ' Photo'`}></img>
        {console.log(this.state.photo, this.state.name)}
      </div>
    </div> </div>
  );
}
}
