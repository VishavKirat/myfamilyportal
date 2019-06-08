import React from 'react';

class SignIn extends React.Component{
   state={
      email: '',
      password: ''
   }
   emailRef = React.createRef();
   passwordRef = React.createRef();
   handleSubmit = (e) =>{
      e.preventDefault();
      console.log(this.state)
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
               <button className="btn pink light-1 z-depth-1">Submit</button>   
               </div>
            </form>
         </div>
      )
   }
}



export default SignIn;