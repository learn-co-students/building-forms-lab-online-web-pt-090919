import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

// act as your connection to the Redux store
// values from Redux + actions to dispatch should be set up here
class BandsContainer extends Component {
  // renderBands = () => this.props.bands.map(band => <ul><Band band={band} /></ul>)
  render() {
    return (
      <div>
        {/* dispatched action required to initiate update
         and passed down as the prop `addBand` to `BandInput`. */}
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => {
      dispatch({ type: 'ADD_BAND', band })
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(BandsContainer)
