import axios from "axios";
import { setAlert } from "./alert";
import {
 GET_JOB,
 GET_JOBS,
 JOB_ERROR,
 ADD_JOB,

} from "./types";




// Add Post
export const addjob = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("api/jobs", formData, config);

    dispatch({
      type:ADD_JOB,
      payload: res.data
    });

    dispatch(setAlert("Job posted", "success"));
  } catch (error) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
      
    });
    
    
  }
};
// Get Posts
export const getjobs = () => async dispatch => {
 
  try {
    const res = await axios.get("/api/jobs");

    dispatch({
      type: GET_JOBS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};


// // Get job by id
export const getjob = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/jobs/${id}`);

    dispatch({
      type: GET_JOB,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

 

