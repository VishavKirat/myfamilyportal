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
        case 'ADD_PROJECTS': console.log('add post',action.project)
    }
    return state;
}
export default ProjectReducer;
