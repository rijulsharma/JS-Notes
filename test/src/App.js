import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      evenCount:0
    }
  }
  increment(){
    this.setState({count : this.state.count + 1});
  }
  incrementEven(){
    
    this.setState({evenCount : this.state.evenCount + 1});
    if(this.state.evenCount % 2 === 0){
    this.setState({count : this.state.count + 1});
    }
  }
  shouldComponentUpdate(nextProps, nextState){
   
    return nextState.count !== this.state.count;
  }
  componentDidMount(){
    console.log("component mounted first");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("previous: " + prevState.count);
    
   if(prevState.count != this.state.count){
    console.log("component just got updated");
   }
   console.log("new: " + this.state.count)
   
  }
  componentDidCatch(error,info){
    console.log(error);
  }
  componentWillUnmount(){
    console.log("Removed component");
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment()}>click me!</button>
        <button onClick={() => this.incrementEven()}>click me twice!</button>
      </div>
    )
  }
}
