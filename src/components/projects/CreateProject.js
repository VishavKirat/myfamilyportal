import React from 'react';
import {connect} from 'react-redux'
import {createProjects} from '../../ReStore/action'

class CreateProject extends React.Component{
   state={
      title: '',
      content: ''
   }
   handleSubmit = (e) =>{
      e.preventDefault();
      this.props.createProjects(this.state)
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
               <h5 className="grey-text text-darken-3">Create Post</h5>
               <div className="input-field">
                  <label htmlFor="title">Title</label>
                  <input type="text" id='title' onChange={this.handleInputChange}/>
               </div>
               <div className="input-field">
                  <label htmlFor="content">Post Content</label>
                  <textarea id="content" className='materialize-textarea' onChange={this.handleInputChange}></textarea>
               </div>
               <div className="input-field">
               <button className="btn pink light-1 z-depth-1">Post</button>   
               </div>
            </form>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch)=>{
   return (
      {
         createProjects : (project)=> dispatch(createProjects(project))
      }
   )
}

export default connect(null,mapDispatchToProps)(CreateProject);