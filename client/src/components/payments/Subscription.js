import React from 'react'
import {useHistory} from 'react-router-dom'
const Subscription = () => {
     const history =useHistory()
     const routeChange=()=>{
        history.push("/choose")
    }


    return (
        <div className="subs">
     <div className='bg-primary p text-center'>
        <h3>subscription page...</h3>
      </div>
      <div>
            <div className="sub">
                <h4>Job Single: KES 200.00</h4>
                <p>Pay for a single job.

                 This is an introduction package in case you've never done this before and just want to try things out.

                You can send quotes for jobs worth up to 50k.</p>
                <input type='submit' className='btn btn-primary' value='SUBSCRIBE'onClick={routeChange} />
          

            </div>

            <div className="sub">
                <h4>Job Plus: KES 1,500.00 </h4>

         <p> For the professional that's looking for as many jobs as they can handle.

Get to send an unlimited number of quotes for 30 days.

You can quote for jobs worth 50k and above.</p>
<input type='submit' className='btn btn-primary' value='SUBSCRIBE'onClick={routeChange} />
          

            </div>
            <div className="sub">

                <h4>Job Premium: KES 3,600.00</h4>
                <div>
               <p> For the professional that's looking for a great deal and some peace of mind.

Get to send an unlimited number of quotes for 90 days.

You can quote for jobs worth 50k and above.</p>
<input type='submit' className='btn btn-primary' value='SUBSCRIBE'onClick={routeChange} />
   
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Subscription
