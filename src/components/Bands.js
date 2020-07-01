import React, { Component } from 'react'; 

export default class Bands extends Component{
        constructor(props){
            super(props)
        }
    render(){ 
        debugger 
        return (<div> 
            
            <ul>{this.props.band.map((single, i)=><li key={i}>{single.name}</li>)}</ul>
        </div>)

    }
}