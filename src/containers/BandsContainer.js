import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map(band => <li>{band.name}</li>)}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: 'ADD_BAND', band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)