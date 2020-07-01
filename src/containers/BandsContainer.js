import React, { Component } from 'react'
import BandInput from '../components/BandInput';  
import {addBand} from '../actions/bandActions' 
import Bands from '../components/Bands'
import {connect} from 'react-redux';
class BandsContainer extends Component {
    

    makeTheBands =()=>{ 
    debugger
    return <Bands band={this.props.bands}/>
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

const mapDispatchToProps = d =>{  
  
  return{
    addBand: band => d(addBand(band)),

  }
}
const mapStateToProps = state =>{  

  return { 
    bands: state.bands 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
