import ProjectReducer from './ProjectReducer';
import authReducer from './authReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: ProjectReducer
})
export default rootReducer;
