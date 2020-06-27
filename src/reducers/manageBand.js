export default function manageBand(state = { bands: [] },
   action) {	
  switch(action.type) {  
    case 'ADD_BAND':
       const newState = {bands: [...state.bands, {name: action.band}]}
       return newState;
       default:
          return state
  }
}