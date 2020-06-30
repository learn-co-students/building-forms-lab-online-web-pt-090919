export default function manageBand(state = {
  bands: [],
}, action) { 
  
  let stateClone = Object.assign({}, state) 
  let {bands} = stateClone
  switch(action.type){ 

    case 'ADD_BAND': 
    debugger
   return { bands: bands.concat(action.band)}
   
    default:
      return state
  }
};
