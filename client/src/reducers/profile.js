
  
import {
  GET_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  FILTER_PROFILE,
  CLEAR_FILTER
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  filtered: null,
  loading: true,

  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
      case FILTER_PROFILE:
        return {
          ...state,
          filtered: state.profiles.filter(contact =>  contact.name )    
        };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null
        };
    default:
      return state;
  }
}