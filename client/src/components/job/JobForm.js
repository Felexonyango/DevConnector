import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addjob } from "../../actions/job";

const JobForm = ({ addjob }) => {
  const [text, setText] = useState("");
   const [title,setTitle]=useState("")
   const[category,setCategory]=useState("")
  const[budget,setBudget]=useState("")
   const[date,setDate]=useState("")
   const[skill,setSkill]=useState("")
   const[emails,setEmails]=useState("")
 


  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Tell us about your job...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addjob({ text,title,budget,category,date,skill,emails});
          setText("");
           setTitle('')
           setBudget('')
           setCategory("")
           setEmails("")
           setDate("")
           setSkill("")
     
          
        }}
      >
         <div className='form-group'>
        <label htmlFor="title">Title</label>
          <input
            type='text'
            name='title'
            value={title}
            required
            onChange={e => setTitle(e.target.value)}/>
</div>
<div className='form-group'>
<label htmlFor="Employment type">Employment type *</label>
          <select name='status'
           value={category}
           onChange={e => setCategory(e.target.value)}
           required>
          <option value ="select">choose one...</option>
            <option value='Permanent'>Permanent</option>
            <option value='Contract'>Contract</option>
            <option value='Temporary'>Temporary</option>
           
          </select>
        
        </div>          

<div className='form-group'>
          <select name='number' value={budget} 
          onChange={e => setBudget(e.target.value)}
          required>
             <option value="select option">select   amount</option> 
             <option value='0'>Ksh 5,000-10,000</option>
            <option value='0'>Ksh 10,000-20,000</option>
          </select>
       
        </div>
<div>
<label htmlFor="text">Give a brief description about the job</label>
        <textarea
          name='text'
          cols='30'
          rows='5'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        >

        </textarea>

        </div>
        <br />

        <br />
        <div>
          
<label htmlFor="text">Skills required</label>
        <textarea
          name='text'
          cols='30'
          rows='5'
          value={skill}
          onChange={e => setSkill(e.target.value)}
          required
        >

        </textarea>

        </div>
        
<div className='form-group'>
    <label htmlFor="text">submission Dates</label>
          <input
            type='date'
            name='date'
            value={date}
            required
            onChange={e => setDate(e.target.value)}/>
</div> 
<div className='form-group'>
    <label htmlFor="email">Email to be sent on</label>
          <input
            type='email'
            name='email'
            value={emails}
            required
            onChange={e => setEmails(e.target.value)}/>
</div> 
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

JobForm.propTypes = {
  addjob: PropTypes.func.isRequired
};

export default connect(null, { addjob })(JobForm);
