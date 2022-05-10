import React, { useState } from 'react'
import Paypal from './Paypal'
const Pay = () => {
  const[checkout, setCheckout]=useState(false)
  return (
    <div>
      {checkout ?(

 <Paypal/>
      ):(

        <button onClick={()=>{setCheckout(true)}}className="btn btn-dark my-1">
          Checkout
        </button>
      )}
    
    </div>
  )
}

export default Pay
