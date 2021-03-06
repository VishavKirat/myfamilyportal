import React from 'react';
import {connect} from 'react-redux'
import {signIn} from '../../ReStore/authActions'


class SignIn extends React.Component{
   state={
      email: '',
      password: ''
   }
   emailRef = React.createRef();
   passwordRef = React.createRef();
   handleSubmit = (e) =>{
      e.preventDefault();
      this.props.signIn(this.state)
   }
   handleInputChange = (e)=>{
      this.setState({
         [e.target.id]:e.target.value
      })
   }
   render(){
      return (
         <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
               <h5 className="grey-text text-darken-3">Sign In</h5>
               <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' onChange={this.handleInputChange}/>
               </div>
               <div className="input-field">
                  <label htmlFor="password">password</label>
                  <input type="password" id='password' onChange={this.handleInputChange}/>
               </div>
               <div className="input-field">
               <button className="btn pink light-1 z-depth-1">Login</button> 
               <div className="red-text center">
                  {this.props.authError ? <p>{this.props.authError}</p>: null}
                  </div> 
               </div>

            </form>
         </div>
      )
   }
}
const mapStateToProps = (state)=>{
   return {
      authError : state.auth.authError
   }
}

const mapDispatchToProps = (dispatch)=>{
 return (
    {signIn : (credentials)=> dispatch(signIn(credentials))
   }
 )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);