import {SENT_STK} from "../actions/types"
const initialState={
    stks: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case SENT_STK:
        return {
          ...state,
          stks: [payload, ...state.stks],
          loading: false
        };
   
      default:
        return state;
    }
  }