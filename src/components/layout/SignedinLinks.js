import React from 'react';
import {NavLink} from 'react-router-dom'
const SignedinLinks = (props)=>{
    return ( 
       <ul className="right">
           <li><NavLink to='/'>New Post</NavLink></li>
           <li><NavLink to='/'>Log Out</NavLink></li>
           <li><NavLink to='/' className='btn btn-floating pink lighten-1'>VV</NavLink></li>
       </ul>
       )
}
export default SignedinLinks;