import {
    GET_JOB,
    GET_JOBS,
    JOB_ERROR,
    ADD_JOB
   } from "../actions/types";
   
  const initialSttate = {
    
    job: null,
    jobs: [],
    loading: true,
    error: {}
  };
  
  export default function(state = initialSttate, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_JOBS:
        return {
        ...state,
        jobs:payload,
        loading:false

        };
      case GET_JOB:
        return {
          ...state,
          job: payload,
          loading: false
        };
      case ADD_JOB:
        return {
          ...state,
          jobs: [payload, ...state.jobs],
          loading: false
        };
   
      case JOB_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  