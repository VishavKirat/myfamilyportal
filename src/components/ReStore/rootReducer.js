
const initState ={
    firstName: '',
    lastName: '',
    email: '',
    content:'',
    title:''
}

export const authReducer = (initState,action)=>{
    console.log(action.type)
}