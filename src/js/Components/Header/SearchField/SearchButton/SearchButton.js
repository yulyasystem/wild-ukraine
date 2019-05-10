import React from 'react';


export default class SearchButton extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="search-button--heading">
        {this.props.title}
      </div>
    );
  }
}
