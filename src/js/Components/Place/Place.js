import React from 'react';
import Aktove from '../../../assets/Aktove.png';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: this.props.class,
      name: this.props.name,
      region: this.props.region,
      photo: Aktove
    }
  }
  render() {
    return ( 
      <div className = "place-wrapper" > <div className="container">
      <div className="place-content-wrapper">
        <div className="navigation-group">
        </div>
        <div className="place-photo">
          <img
            className
            ={`${this.state.class + '-photo'}`}
            src={this.state.photo}
            alt={`${this.state.name + ' Photo'}`}></img>
        </div>
        <div className="heading">
          <div className={`${this.state.class + '-heading'}`}>
            <div>
              {this
                .state
                .name
                .split(' ')[0]}
            </div>
            <div>
              {this
                .state
                .name
                .split(' ')[1]
}
            </div>
          </div>
          <div className={`${this.state.class + '-region--text'}`}>{this.state.region}</div>
        </div>

        {console.log(this.state.photo, this.state.name)}
      </div>
    </div> </div>
  );
}
}
