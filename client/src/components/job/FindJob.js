import React, { Fragment, useEffect,useState } from "react";
import {useParams } from 'react-router-dom';

import JobItems from "./JobsItems"


const Findjob =() => {
    const {id}=useParams()
    const [jobs, setJobs] =useState([]);

    useEffect(()=>{
    getData()

    },[])

  const getData= async () => {
  
const  data = await fetch(`/api/jobs/${id}`)
const job = await data.json();
setJobs(job)
console.log(job)
  
   }
  
  return (
 
      <Fragment>
        <h1 className='large text-primary'> Explore job</h1>
        <h1>Job details </h1>
    <div className=' large '>
         {
            
              <JobItems   job={jobs} />
            
          }
        </div>
      
  
  </Fragment>

  );
};




export default  Findjob
