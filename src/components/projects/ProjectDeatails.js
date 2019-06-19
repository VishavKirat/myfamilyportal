import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'

const ProjectDeatails = (props) => {
    const id = props.match.params.id
   
    if(props.post){
        let sec = props.post.createdAt.seconds
        return (<div className='conatiner section project-details'>
            { console.log(props)}
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{props.post.title}</span>
                    <p>
                       {props.post.content}
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {props.post.authorFirstName}</div>
                    <div>On {new Date(sec*1000).toDateString()}
                    </div>
                </div>
            </div>
        </div>)
    }else{
        return (
            <div className="loading">
                <p>......Loading</p>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id]: null
    return (
        {post: post}
    )
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'posts'}
    ])
)(ProjectDeatails);

