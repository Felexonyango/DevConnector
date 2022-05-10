import React,{useState,Fragment} from 'react'
import { connect } from 'react-redux'
import {forgetpassword} from '../../actions/auth'
const Forgetpassword = ({forgetpassword}) => {
  const[email, setEmail]=useState("")


    const onSubmit = async (e) => {
        e.preventDefault();
        forgetpassword(email);
        setEmail("")
      };
       
  
    

    return (
        <Fragment>
      
        <p className='lead'>
          <i className='fas fa-user'></i> FORGOT PASSWORD
        </p>
        <p>Enter the email address you want to reset the password for * </p>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
         
          <input type='submit' className='btn btn-primary' value='Forget password'/>
        </form>
    
      </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  export default connect(mapStateToProps, { forgetpassword })(Forgetpassword);
