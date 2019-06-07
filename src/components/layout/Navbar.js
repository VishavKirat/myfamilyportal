import React from 'react';
import {Link} from 'react-router-dom'
import SignedinLinks from './SignedinLinks'
import SignedoutLinks from './SignedoutLinks'
const Navbar = (props)=>{
   return ( 
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
             <Link to ='/' className='brand-logo'>MY FAMILY PORTAL</Link>
             <SignedinLinks />
             <SignedoutLinks />
        </div>
    </nav>
   )
}

export default Navbar;