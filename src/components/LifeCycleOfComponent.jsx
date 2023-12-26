import React, { Component } from 'react';

class LifeCycleOfComponent extends Component {
 constructor(props) {
  super(props)
  this.state = { text: "lifecycle" }
 }
 componentDidMount() {
  console.log("component in mounting phase");
 }
 updateState() {
  this.setState({ text: "updated lifecycle" })
 }
 render() {
  console.log("compoenent got rendered");
  return (
   <div>
    <p>this is to test life cycle</p>
    <p>state value {this.state.text}</p>
    <button onClick={this.updateState.bind(this)}>update component</button>
   </div>
  );
 }
 shouldComponentUpdate(newProp, newState) {
  console.log("component should update state");
  return true;
 }
 componentDidUpdate() {
  console.log("component did update state");
 }
 componentWillUnmount() {
  console.log("component will unmount stage");
 }
}

export default LifeCycleOfComponent;