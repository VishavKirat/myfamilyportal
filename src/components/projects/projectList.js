import React from 'react'
import ProjectSummery from './ProjectSummery'
import {Link} from 'react-router-dom'

const ProjectList = (props) =>{
    const {projects} = props;
    return (
        <div className="project-list section">
            {
                projects && projects.map((project)=>{
                    return (
                        <Link to={'/post/'+project.id} key={project.id}>
                         <ProjectSummery project={project} id={project.id}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default (ProjectList);