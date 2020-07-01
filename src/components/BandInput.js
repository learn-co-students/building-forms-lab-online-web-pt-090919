// Add BandInput component
import React, { Component } from 'react'
//import {addBand} from '../actions/bandActions'
class BandInput extends Component { 
  state = {
    name: ''
  } 
  handleChange = (e) =>{
    this.setState({name: e.target.value})  
    console.log(this.state)
  } 

  handleSubmit = e =>{
      e.preventDefault(); 
      debugger
      this.props.addBand(this.state);
      this.setState({ name: '' }) 
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}> 
          <label>Band Name</label> 
         
          <br/>
          <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.name} /> 
          <input type="submit" />
          </form>
      </div>
    )
  }
}

export default BandInput
