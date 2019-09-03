import React from 'react';
import Navbar from './containers/navbar';
import Dashboard from './containers/dashboard';
import Numbers from './containers/numbers';
import Submissions from './containers/submissions';

import { BrowserRouter as Router, Route} from "react-router-dom";
import { createStore } from 'redux';
import numberReducer from './reducers/numberReducer';
import { Provider } from 'react-redux';
import addNumber from './actions/addNumberAction';

var store = createStore(numberReducer,{
  numbers: [],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {

  fetch('http://localhost:3636/numbers/1')
  .then(response => response.json())
  .then(response => response.data.map(item => store.dispatch(addNumber(item.PHONEID, item.FNAME, item.LNAME, item.PHONE))))
  
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
