import React,{Fragment, useState} from 'react'

import { useHistory,useParams } from 'react-router-dom';
const Resetpassword = () => {
  const {token}=useParams()
  
    const[password, setPassword]=useState("")
    const[password2, setPassword2]=useState("")
    let history = useHistory ()
  
      const postData=()=>{

        fetch("/api/users/resetpassword",{
          method:"pOST",
          headers: {
           "Content-Type": "application/json"
         },
         body:JSON.stringify({
           password,
           token
       
         })
       
         }).then(res=>res.json())
         .then(data=>{ 
       console.log(data)

      history.push('/login')
})
.catch(err=>{
  console.log(err)
})


      }

    
    const onSubmit = async (e) => {
        e.preventDefault();
        setPassword("")
        setPassword2("")
        if (password !== password2) {
        alert("password does not match")
        }

      };
       
    return (
        <Fragment>
       
      <p className='lead'>
          <i className='fas fa-user'></i>RESET PASSWORD
        </p>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={e => setPassword2(e.target.value)}
            />
          </div>
          <input type='submit'
           className='btn btn-primary' 
          value='SUBMIT' 
          onClick={()=>postData()}
          
          />
        </form>
      
      </Fragment>
    );

}

export default  Resetpassword
