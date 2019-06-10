export const TYPES ={
    ADD_PROJECTS: 'ADD_PROJECTS'
}
export const createProjects = (project)=>{
    return (dispatch,getState) =>{
        //make a async call
        dispatch({type:TYPES.ADD_PROJECTS,project})
        }
}



