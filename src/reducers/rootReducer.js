import { combineReducers} from 'redux';

import numberReducer from './numberReducer';
import formReducer from './formReducer';
import formNumberReducer from './formNumberReducer';
import fetchingReducer from './fetchingReducer';

const rootReducer = combineReducers({
    numberReducer,
    formReducer,
    formNumberReducer,
    fetchingReducer
})


export default rootReducer;