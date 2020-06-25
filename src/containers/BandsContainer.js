import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  addBand = (e, state) => {
    e.preventDefault()
    this.props.add(state.name)
  }
  
  mapBands = () => {
    return this.props.bands.map(band => <li>{band.name}</li>)
  }

  render() {
    return(
      <div>
        <div>
          <BandInput addBand={this.addBand} />
        </div>
        <div>
          <br />BANDS<br />
          {this.mapBands()}
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    add: (band) => {
      return dispatch({ type: "ADD_BAND", band: band })
    }
  }
}


const mapStateToProps = state => {
  return {bands: state.bands}
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);