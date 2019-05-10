import "../sass/main.scss";
import React from "react";
import { render } from "react-dom";
import {App} from "./Components/App";
//  class Header extends React.Component
// {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
//  class App extends React.Component{
//   render(){
//     return(
//       <Header name= "yulia"/>
//     )
//   }
// }

console.log(<App/>);

render(<App />, document.getElementById("root"));
