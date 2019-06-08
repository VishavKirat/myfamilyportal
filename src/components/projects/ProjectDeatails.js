import React from 'react'

const ProjectDeatails = (props) => {
    const id = props.match.params.id
    return (
        <div className='conatiner section project-details'>
            { console.log(props)}
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Post Title -{id} </span>
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit Labore eos maxime recusandae, reprehenderit molestias sequi perspiciatis possimus incidunt eaque nulla dolorum ullam id, cupiditate, quas hic molestiae obcaecati enim vitae.
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Ninja</div>
                    <div>On &th June,2019</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDeatails
