import axios from "axios";
import { setAlert } from "./alert";
import {SENT_STK,SENT_FAIL} from "../actions/types"
export const addstk = formData => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    try {
      const res = await axios.post("/api/stkpush", formData, config);
  
      dispatch({
        type:SENT_STK,
        payload: res.data
      });
  
      dispatch(setAlert("Money sent ", "success"));
    } catch (error) {
      dispatch({
        type: SENT_FAIL,
        payload: { msg: error.response.statusText, status: error.response.status }
        
      });
      
      
    }
  };
  //