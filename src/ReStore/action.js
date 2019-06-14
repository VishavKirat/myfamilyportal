export const TYPES ={
    ADD_PROJECTS: 'ADD_PROJECTS'
}
export const createProjects = (project)=>{
    return (dispatch,getState,{getFirestore,getFirebase}) =>{
        //make a async call
        const firestore = getFirestore();
        firestore.collection('posts').add({
            ...project,
            authorFirstName: 'Vishav',
            authorLastName: 'Singh',
            authorId: 1223454,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:TYPES.ADD_PROJECTS,project})
        }).catch((error)=>{
            dispatch({type:'CREATE_POST_ERROR', error})
        })
    
        }
}



