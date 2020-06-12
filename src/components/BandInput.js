// Add BandInput component
import React, { Component } from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';

class BandInput extends Component {
  
  state = {name: ''}
  
   handleSubmit = event => {
      event.preventDefault()
      const band = {...state, id: uuid()}
      this.props.addBand(band)
      this.setState({name: ''})
   }
   
   handleChange = event => {
     const {name, value} = event.target
     this.setState({[name]: value})
   }
      
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
        <label>Band</label>
        <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
        <input type"submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
})

export default connect(null, mapDispatchToProps)(BandInput)
