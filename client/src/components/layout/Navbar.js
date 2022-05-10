import React, { Fragment,useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import './Navba.css'


const Navbar = ({ auth: { isAuthenticated, loading } ,logout }) => {

  const [click, setClick] = useState(false);
 
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const authLinks = (
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
  <li className='nav-item'>
            <Link to='/profiles'
            className='nav-links'
             onClick={closeMobileMenu}
            >BROWSE DEVELOPERS </Link>
          </li>
       
          <li className='nav-item'>
            <Link to='/job'className='nav-links'
             onClick={closeMobileMenu}
            > BROWSE GIGS</Link>
          </li>
          
          <li className="nav-item">
          <Link to='/posts'className='nav-links'
          onClick={closeMobileMenu}
            > DISCUSSION
            </Link>
          </li>
          <li className='nav-item'>
             <Link to='/get-events'className='nav-links'
              onClick={closeMobileMenu}
             > BROWSE EVENTS</Link>
           </li>
           <li className="nav-item">
          <Link to='/jobs'className='nav-links'
          onClick={closeMobileMenu}>POST GIG
            </Link>
          </li>
          <li className='nav-item '>
            <Link to='/video-meeting'
            className='nav-links'
          
            onClick={closeMobileMenu}>
              DEVLIVE
            
            
            </Link>
            </li>
            <li className="nav-item">
    <Link to ="/"
    onClick={()=>setClick(false)}>
    
   <a onClick={logout} href='/'>
      <span className='hide-sm'className="nav-links">
        LOGOUT
        </span>
 
    </a>
    </Link>
    </li>
         


  </ul>


  );

  const guestLinks = (

    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
          <Link to='/jobs'className='nav-links'
          onClick={closeMobileMenu}
            >POST GIG
            </Link>
          </li>
           <li className='nav-item'>
 
 <Link to='/job'className='nav-links'
  onClick={() => setClick(false)}>

BROWSE GIGS
  </Link>
 </li>
    <li className='nav-item'>
            <Link to='/profiles'
            className='nav-links'
             onClick={closeMobileMenu}>BROWSE DEVELOPERS</Link>
          </li>
          <li className='nav-item'>
             <Link to='/get-events'className='nav-links'
              onClick={closeMobileMenu}
             >  BROWSE EVENTS</Link>
           </li>
           <li className='nav-item'>
           <Link to='/login'
            className='nav-links'
             onClick={closeMobileMenu}>LOG IN</Link>

           </li>
           <li className='nav-item'>
           <Link to='/register'
            className='nav-links'
             onClick={closeMobileMenu}>SIGN UP</Link>

           </li>
          
          
         
         
         </ul>
      
 
  );


  return (
    <nav className='NavbarItems  bg-dark'>
    <Link to='/'>
          <i className='fas fa-code'></i> DevConnector
        </Link>
      
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
     
        {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  auth: state.auth,
  
});

export default connect(mapStateToProps,{ logout })(Navbar);