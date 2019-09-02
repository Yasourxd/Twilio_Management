import React from 'react';
import Navbar from './containers/navbar';
import Dashboard from './containers/dashboard';
import Numbers from './containers/numbers';
import Submissions from './containers/submissions';

import { BrowserRouter as Router, Route} from "react-router-dom";
import { createStore } from 'redux';
import numberReducer from './reducers/numberReducer';
import { Provider } from 'react-redux';

var store = createStore(numberReducer,{
  numbers: [
    {ID: 1, FNAME: 'Elly', LNAME: 'Smith', PHONE: '+905456895245'},
    {ID: 2, FNAME: 'Michael', LNAME: 'Johansan', PHONE: '+905412195245'},
    {ID: 3, FNAME: 'Miller', LNAME: 'Jackson', PHONE: '+905454235245'},
    {ID: 4, FNAME: 'Johnson', LNAME: 'Anderson', PHONE: '+905123689524'}
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar>
          <Route exact path="/" component={Dashboard} />
          <Route path="/numbers" component={Numbers} />
          <Route path="/submissions" component={Submissions} />
        </Navbar>
      </Router>
    </Provider>
  );
}

export {
  App,
  store
};
