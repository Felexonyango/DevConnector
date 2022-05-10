import {PAYPAL_FAIL, PAYPAL_SENT} from "../actions/types"
const initialState={
    pay: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case PAYPAL_SENT:
        return {
          ...state,
          stks: [payload, ...state.pay],
          loading: false
        };
        case PAYPAL_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
   
      default:
        return state;
    }
  }