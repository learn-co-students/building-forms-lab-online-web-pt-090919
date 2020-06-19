import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import { addBand } from '../reducers/manageBand'

class BandsContainer extends Component {
  
  handleRenderBands() {
    const { bands } = this.props
    return bands.map((band, index) => {
      return <li key={index}>{band.name}</li>
    })
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          { this.handleRenderBands() }
        </ul>
      </div>
    )
  }
}

// STORE CONNECTION AND OTHER STORE RELATED FUNCTIONS
const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch(addBand(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
