import React, { Fragment, useEffect,useState } from "react";
import Spinner from "../layout/Spinner";
import JobItems from "./JobsItems"
import { getjobs } from "../../actions/job" 
import { connect } from "react-redux";


const Jobs = ({ getjobs, job: { jobs, loading } }) => {

  useEffect(() => {
    getjobs();
  }, [getjobs]);

  return (
    <Fragment>
      
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'> Explore jobs</h1>
       
     
      <br /> 
      <div className=' large '>
            {jobs.length > 0 ? (
              jobs.map(job => (
                <JobItems key={job._id}  job={job} />
              ))
            ) : (
              <h4>No jobs found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};


const mapStateToProps = state => ({
  job: state.job
});

export default connect(mapStateToProps, { getjobs })(Jobs);
