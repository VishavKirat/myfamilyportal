import ProjectReducer from './ProjectReducer';
import authReducer from './authReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    project: ProjectReducer,
    firestore: firestoreReducer
})
export default rootReducer;
