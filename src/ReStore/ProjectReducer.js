import {projects} from './action'
const initState ={
    projects:[
        {title:'Im struggligng with leg pain!',content:'I donot do blah! blah! blah!' },
        {title:'Im struggligng with leg pain!',content:'I donot do blah! blah! blah!' },
        {title:'Im struggligng with leg pain!',content:'I donot do blah! blah! blah!' },
    ]
}

const ProjectReducer = (state = initState,action)=>{
    switch(action.type){
        case 'ADD_PROJECTS': return {...state,projects: [...state.projects,action.project]};
        case 'CREATE_POST_ERROR': console.log('EROOR OCCURERED',action.error)
    }
    return state;
}
export default ProjectReducer;
