// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = event => {
    // update state each time user types a new character
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    // dispatching actions and updating the store each time
    //  someone submits a new band
    event.preventDefault();
    // update the Redux store's state
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name:</label>
          <input
            name="name"
            type="text"
            // control its inputs based on internal state
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
