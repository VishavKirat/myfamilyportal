import React from 'react';
import {Link} from 'react-router-dom'
import SignedinLinks from './SignedinLinks'
import SignedoutLinks from './SignedoutLinks'
import {connect} from 'react-redux'
const Navbar = (props)=>{
    console.log(props.auth)
    const links = props.auth.uid ? <SignedinLinks /> : <SignedoutLinks/>
   return ( 
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
             <Link to ='/' className='brand-logo'>MY FAMILY PORTAL</Link>
             {links}
        </div>
    </nav>
   )
}
const mapStateToProps = (state)=>{
    console.log(state);
    return (
        {
            auth: state.firebase.auth
        }
    )
}
export default connect(mapStateToProps) (Navbar);