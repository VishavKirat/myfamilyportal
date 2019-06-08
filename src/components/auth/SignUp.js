import React from 'react';

class SignUp extends React.Component{
   state={
      email: '',
      password: '',
      firstName: '',
      lastName: '',
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
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id='firstName' required onChange={this.handleInputChange}/>
               </div>
               
               <div className="input-field">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id='lastName' required onChange={this.handleInputChange}/>
               </div>
              
               <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' required onChange={this.handleInputChange}/>
               </div>
               <div className="input-field">
                  <label htmlFor="password">password</label>
                  <input type="password" id='password' required onChange={this.handleInputChange}/>
               </div>
               <div className="input-field">
                 <button className="btn pink light-1 z-depth-1">Submit</button>   
               </div>
            </form>
         </div>
      )
   }
}



export default SignUp;