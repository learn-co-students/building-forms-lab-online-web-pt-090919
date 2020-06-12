// Add BandInput component
import React, { Component } from 'react'

export default class BandInput extends Component {
  state={
    name: ""
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const band = (this.state);
    this.props.addBand(band);
    //the addBand prop comes from our BandsContainer dispatch
    this.setState({
      name: ''
    });
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}