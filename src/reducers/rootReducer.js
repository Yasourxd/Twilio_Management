import { combineReducers} from 'redux';

import numberReducer from './numberReducer';
import formReducer from './formReducer';
import formNumberReducer from './formNumberReducer';
import fetchingReducer from './fetchingReducer';
import formFetchingReducer from './formFetchingReducer';
import callLogsReducer from './callLogsReducer';
import logDetailsReducer from './logDetailRecuder';
import navbarReducer from './navbarReducer';
import dashboardCardReducer from './dashboardCardReducer';

const rootReducer = combineReducers({
    contactList: numberReducer,
    formList: formReducer,
    formNumberReducer,
    fetchingReducer,
    formFetchingReducer,
    callLogs: callLogsReducer,
    logDetails: logDetailsReducer,
    navbar: navbarReducer,
    dashCards: dashboardCardReducer
})


export default rootReducer;