import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
const myName = "Cao Dang Tan";
const myAge = 20;
const myStatus = true;
const person = {
  name: "Tan",
  age: 20
}
// const showInfo = (props) => {
//   return <p> Thong tin user {props.name}</p>
// }
// const ShowInfo = (props) => {
//   console.log(props);
//   return <p> Thong tin user {props.name}</p>
// }
ReactDOM.render( <App/> ,document.getElementById('root'))

