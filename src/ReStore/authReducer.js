
const initState ={}

const authReducer = (state=initState,action)=>{
   switch(action.type){
      case 'LOGIN_ERROR':
         return (
            {...state,authError:'Login Failed'}
            );
      case 'LOGIN_SUCCESS':console.log('Login Success')
         return (
            {
               ...state,authError:null
            }
         );
      case 'SIGN_OUT': console.log('Log Out');
      default: return state
   }
}
export default authReducer;
