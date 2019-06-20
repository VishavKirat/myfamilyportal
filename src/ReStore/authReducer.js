
const initState ={}

const authReducer = (state=initState,action)=>{
   switch(action.type){
      case 'LOGIN_ERROR':console.log('some Errrorrrr');
      case 'LOGIN_SUCCESS':console.log('Login Success');
      default: return state
   }
}
export default authReducer;
