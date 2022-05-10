import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Tools from './Tools'
const Landing = ({  isAuthenticated}) => {

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div>
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
         
        
          <div className='buttons'>
          <Link to='/register' className='btn btn-primary'>
            CREATE NETWORK
            </Link>
          
           
          </div>
   
       
        </div>
      </div>
    </section>
    <Tools/>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,

});

export default connect(mapStateToProps)(Landing);
