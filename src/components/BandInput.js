// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={ e => this.props.addBand(e, this.state) }>
          <input name="band"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />    
          <input type="submit" text="Add Band" />
        </form>
      </div>
    )
  }
}

export default BandInput