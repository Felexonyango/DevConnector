import  '@testing-library/jest-dom/extend-expect'
import reducer from '../../reducers/auth'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
 
   
  } from "../../actions/types";

   const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    
  };
  




  describe("Auth reducer",()=>{
    it('should return the initial state', () => {

      expect(reducer(undefined, {})).toEqual(initialState);
    });
  
    it('handles Registration  request', () => {


      expect(reducer(initialState, { type: REGISTER_SUCCESS })).toEqual({
        ...initialState,
        isAuthenticated: true,
        loading: false
      
       
        
      });
    })

    it('handles Login  request', () => {


      expect(reducer(initialState, { type: LOGIN_SUCCESS })).toEqual({
        ...initialState,
        isAuthenticated: true,
        loading: false,
     
        
      });

    })




  })