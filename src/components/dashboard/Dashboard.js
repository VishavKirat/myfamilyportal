import React, {Component} from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class Dashboard extends Component{
    render(){
        return (
            <div className='dasboard conatiner' >
                <div className="row">
                    <div className="col s12 m6"><ProjectList projects={this.props.projects}/></div>
                    <div className="col s12 m5 offset-m1"><Notification /></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state)
   return { projects: state.firestore.ordered.posts}
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
    )(Dashboard)
