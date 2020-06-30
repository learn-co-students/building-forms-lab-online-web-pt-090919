import React, { Component } from 'react'
import BandInput from '../components/BandInput';  
import {addBand} from '../actions/bandActions'
import {connect} from 'react-redux';
class BandsContainer extends Component {
    

    makeTheBands =()=>{ 
    debugger
    this.props.bands.map((band,i) => (<li key ={i}>{band}</li>))
    }
  render() {
    return(
      <div>
        < BandInput addBand={this.props.addBand} />
        <br/>
        <div>
        <ul>{this.makeTheBands()}</ul> 
        </div>
      </div>
    )
  }
} 

const mdtp = d =>{  
  
  return{
    addBand: band => d(addBand(band)),

  }
}
const mstp = s =>{  
  
  return { 
    bands: s.bands 
  }
}

export default connect(mstp, mdtp)(BandsContainer)
