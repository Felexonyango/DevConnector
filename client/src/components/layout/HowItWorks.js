import React from 'react'
import { Link } from 'react-router-dom'
const HowitWorks= () => {
    return (
        <div >
      
   <h1>Welcome to the DeveConnector
freelance community <br />
-More than just a career
</h1>
<br />
<p className='p'>
DevConnector enables the world’s best tech freelancers to become even better. 
Our mission is to make freelancing the dream job for our thriving community.</p>
       
       <br />
       <Link to ='/community'>Join Our Community</Link>
     
 
 <br />
 <div>
<h3>By the community  for the community 
</h3>
<p>
    <br />
DevConnector is more than a place to find the next job. Everything we do is done by the community for the community.
Whether you want to share your knowledge, become an interviewer,get jobs for free , engage in events or simply learn from others 
Devconnector is the place where tech freelancers have the freedom to grow and build more than just a career.


</p>
   
 </div>

 <br />
 <div>
<h3>Intro call & review of your work
</h3>
<p>During the initial screening we review your portfolio 
    e.g. your GitHub to understand what type of projects are your sweet spot. We will follow up with a call to get 
    to know you and learn more about your experience and aspirations.</p>
 </div>
       </div>
    )
}

export default HowitWorks
