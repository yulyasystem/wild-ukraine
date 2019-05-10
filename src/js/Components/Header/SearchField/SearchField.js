import React from "react";
import {SearchItem} from "./SearchItem";
import {SearchButton} from "./SearchButton";

export default class SearchField extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedItem: this.updateData,
    }
    this.updateData = this.updateData.bind(this);
     
  }
  updateData(value){
    this.setState({selectedItem:value});

  }
  
  render() {
    return (
      <div className=" search-field main-wrapper">
        <SearchItem  title = "Better to visit" items={[
            { value: 'Spring', id: 1 },
            { value: 'Summer', id: 2 },
            { value: 'Autumn', id: 3 },
            { value: 'Winter',id:4},
            { value: 'All',id:5},

          ]} 
            updateData={this.updateData}
          />
          <SearchItem  title = "Region" items={[
            { value: 'West', id: 6 },
            { value: 'East', id: 7 },
            { value: 'North', id: 8 },
            { value: 'South',id:9},
            { value: 'All',id:10},

          ]} />                                                                                                                                                                       
        <SearchButton title ="Search Places"/>
      </div>  
          
    );
  }
}
