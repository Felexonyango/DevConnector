import {
    GET_MEETINGS,
    MEETING_ERROR,
    ADD_MEETING
   } from "./types"
import axios from "axios";
import { setAlert } from "./alert";
// Add meeting
export const addmeet = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("api/meet", formData, config);

    dispatch({
      type:ADD_MEETING,
      payload: res.data
    });

    dispatch(setAlert("meeting posted", "success"));
  } catch (error) {
    dispatch({
      type: MEETING_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
      
    });
    
    
  }
};
// Get Posts
export const getmeetings = () => async dispatch => {
 
  try {
    const res = await axios.get("/api/meet");

    dispatch({
      type: GET_MEETINGS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: MEETING_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};



 

