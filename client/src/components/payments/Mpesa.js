import React, { useState } from "react";
import { connect } from "react-redux";
import { addstk } from "../../actions/mpesa";
import Pay from "./Pay";


const Mpesa = ({ addstk }) => {
  const [phone, setPhone] = useState("");
   const [amount,setAmount]=useState("")


  return (
    <div className="all">
    <div className='post-form'>
       <h6 className="h6 bg-primary">Payment Methods </h6>
      <div className="mpesa">
  
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addstk({ phone,amount});
          setAmount("");
           setPhone('')
          
        }}
      >
         <div className='form'>
           
    
           <h5 className="large">Lipa na mpesa </h5>
        <label htmlFor="phone">Phone</label>
          <input
            type='phone'
            name='phone'
            value={phone}
            required
            placeholder="2547....."
            onChange={e => setPhone(e.target.value)}
            className=""
            />
</div>
<br />

<div className='form'>
        <label htmlFor="Amount">Amount</label>
          <input
            type='amount'
            name='amount'
            value={amount}
            required
            onChange={e => setAmount(e.target.value)}/>
</div>
<div>

        </div>
  


        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>

  </div>
  <div className="paypal">
  <h5 className="large">Pay with paypal</h5>
      <Pay/>
  </div>


      
    </div>
    </div>
  );
};


export default connect(null, { addstk })(Mpesa);
