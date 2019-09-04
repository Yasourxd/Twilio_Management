import { combineReducers} from 'redux';

import numberReducer from './numberReducer';
import formReducer from './formReducer';
import formNumberReducer from './formNumberReducer'

const rootReducer = combineReducers({
    numberReducer,
    formReducer,
    formNumberReducer
})


export default rootReducer;