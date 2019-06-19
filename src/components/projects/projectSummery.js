import React from 'react';

const ProjectSummary = (props) =>{
    const {project} = props;
    return (
        <div className="project-summary card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <p className="grey-text">Posted by the Net Ninja</p>
            </div>
        </div>
    )
}
export default ProjectSummary;