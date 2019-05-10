import React from 'react';


export default class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title ,
      items: this.props.items || [],
      showItems: false,
      selectedItem: this.props.items && this.props.items[0]
    }
    this.dropDown = this.dropDown.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }
  
  dropDown() {
    this.setState(previousState => ({
      showItems: !previousState.showItems
    }))

  }
  selectItem(item) {
      this.setState({
        selectedItem: item,
        showItems: false,
      })
    }
  render() {
    return (
      <div 
      className = "search-item--container"
      >
        <div className="search-item--heading">
        {this.state.title}
        </div>
        <div className="search-item--selected-item">
          {this.state.selectedItem.value }
        </div>
        <div className = "search-item--arrow"
        onClick={this.dropDown}>
          <span className = {
            `${this.state.showItems ? 'search-item--arrow-up':'search-item--arrow-down'}`
            }>
          </span>
        </div>
        <div style={{display:this.state.showItems?'block':'none'}}
        className="search-item--dropdown-container "
        >
          {
            this.state.items.map(item=><div key={item.id}
            onClick = {()=>{
              this.selectItem(item);
              this.props.updateData(this.state.selectedItem.value);
              console.log(this.state.selectedItem, "selected");
              
              
              }}
              
            className = {
              this.setState.selectItem === item ? 'selected' : ''
            }
            
            >
            {item.value}
            </div>
            )
          }
       
        </div>

      </div>
    );
  }
}





{/* <div className="select-field--box">
      <div className="select-field--container">
      <div
        className="select-filed--selected-item"
        >
          {this.state.selectedItem.value}
        </div>
        <div
        className="select-field--arrow"
        onClick ={this.dropDown}
        >
          <span className={`${this.state.showItems ? 'select-field--arrow-up':'select-field--arrow-down'}`}></span>
        </div>
        <div style={{display:this.state.showItems?'block':'none'}}
        className="select-field--item "
        >
          {
            this.state.items.map(item => <div 
            key={item.id}
            onClick = {()=>this.selectItem(item)}
            className = {this.setState.selectItem===item ?'selected':''}
            >
              {item.value}
            </div>)
          }
        </div>
      </div>
   </div> */}
