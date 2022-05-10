import axios from "axios";
import { setAlert } from "./alert";
import {PAYPAL_FAIL,PAYPAL_SENT} from "../actions/types"
export const addpaypal = (amount) => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ amount });
    try {
      const res = await axios.post("/api/paypal/payment", body, config);
  
      dispatch({
        type:PAYPAL_SENT,
        payload: res.data
      });
  
      dispatch(setAlert("Paypal ", "success"));
    } catch (error) {
      dispatch({
        type: PAYPAL_FAIL,
        payload: { msg: error.response.statusText, status: error.response.status }
        
      });
      
      
    }
  };
  //