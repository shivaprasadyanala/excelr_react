import React, { Component } from 'react'
import '../index.css'
import { createUseStyles } from "react-jss";
export default class DemoClassComp extends Component {
 constructor(props) {
  super(props)
  this.state = { count: 0 }
 }
 styles = createUseStyles({
  student: {
   border: "2px solid green",
   width: "40%",
   listStyleType: "none",
  },

  studentDetails: {
   color: "blue",
   fontSize: "23px",
  },
 });
 render() {
  return (
   <div>
    <h2>Count : {this.state.count}</h2>
    {/* {className = { text <0 ? styles.btn-disable : styles.btn}} */}
    <button className={this.state.count < 0 ? this.disable : ""} onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increment</button>
    <button style={{ backgroundColor: this.state.count > 0 ? 'grey' : 'black' }} className='btn' onClick={() => { this.setState({ count: this.state.count - 1 }) }}>Decrement</button>
    <button className='btn' onClick={() => { this.setState({ count: 0 }) }}>reset</button>
   </div >
  )
 }
}
