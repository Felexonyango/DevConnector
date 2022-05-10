import {
    GET_MEETINGS,
    MEETING_ERROR,
    ADD_MEETING
   } from "../actions/types";
   
  const initialSttate = {
    
    meeting: null,
    meetings: [],
    loading: true,
    error: {}
  };
  
  export default function(state = initialSttate, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_MEETINGS:
        return {
        ...state,
        meetings:payload,
        loading:false

        };
     
      case ADD_MEETING:
        return {
          ...state,
          meetings: [payload, ...state.meetings],
          loading: false
        };
   
      case MEETING_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  