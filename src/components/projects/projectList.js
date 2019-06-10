import React from 'react'
import ProjectSummery from './ProjectSummery'
const ProjectList = (props) =>{
    const {projects} = props;
    return (
        <div className="project-list section">
            {
                projects && projects.map((project)=>{
                    return (
                         <ProjectSummery project={project} key={Math.floor(Math.random()*999)}/>
                    )
                })
            }
        </div>
    )
}
export default ProjectList;