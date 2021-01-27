import { combineReducers } from 'redux';
import user from './users/reducer'
import general from './general/reducers'



const reducers = combineReducers({
 user,
general
});

export default reducers;