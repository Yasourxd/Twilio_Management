import React from 'react';
import axios from 'axios'
import Navbar from './containers/navbar';
import Dashboard from './containers/dashboard';
import Numbers from './containers/numbers';
import Submissions from './containers/submissions';
import FormContainer from './containers/formContainer';
import LoadingComponent from './containers/loadingContainer'

import { BrowserRouter as Router, Route} from "react-router-dom";
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

import addNumber from './actions/addNumberAction';
import addForm from './actions/addFormAction';
import addFormNumber from './actions/addFormNumberAction';
import setFetch from './actions/setFetchAction';


var store = createStore(rootReducer,{},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends React.Component{
  constructor(props){
    super(props)
  }

  

  componentWillMount(){
    axios.all([
      axios.get('http://localhost:3636/numbers/1'),
      axios.get('http://localhost:3636/forms/69144066531945e2a1979e118a0b3ddd'),
      axios.get('http://localhost:3636/formnumbers/1')
    ]).then(axios.spread((numbers, forms, formNumbers) => {
      numbers.data.data.map(item => store.dispatch(addNumber(item.PHONEID, item.FNAME, item.LNAME, item.PHONE)));
      forms.data.data.map(item => store.dispatch(addForm(item.id, item.title)))
      formNumbers.data.data.map(item => store.dispatch(addFormNumber(item.FORMID, item.FORMNUMBER, item.PHONEID, item.FNAME, item.LNAME, item.PHONE)))
      store.dispatch(setFetch(true))
    }))
    
      // fetch('http://localhost:3636/numbers/1')
      // .then(response => response.json())
      // .then(response => response.data.map(item => store.dispatch(addNumber(item.PHONEID, item.FNAME, item.LNAME, item.PHONE))))
      // .then(console.log("1"))

      // fetch('http://localhost:3636/forms/69144066531945e2a1979e118a0b3ddd')
      // .then(response => response.json())
      // .then(response => response.data.map(item => store.dispatch(addForm(item.id, item.title))))
      // .then(console.log("2"))
        
      // fetch('http://localhost:3636/formnumbers/1')
      // .then(response => response.json())
      // .then(response => response.data.map(item => store.dispatch(addFormNumber(item.FORMID, item.FORMNUMBER, item.PHONEID, item.FNAME, item.LNAME, item.PHONE))))
      // .then(console.log("3"))

  }


  render(){
    return(
      <Provider store={store}>
        <LoadingComponent>
          <Router>
            <Navbar>
                <Route exact path="/" component={Dashboard} />
                <Route path="/numbers" component={Numbers} />
                <Route path="/forms" component={FormContainer} />
                <Route path="/submissions" component={Submissions} />
            </Navbar>
          </Router>
        </LoadingComponent>
    </Provider>
    )
  }
}

export {
  App,
  store
};

function handleFetch(){
  fetch('http://localhost:3636/numbers/1')
  .then(response => response.json())
  .then(response => response.data.map(item => store.dispatch(addNumber(item.PHONEID, item.FNAME, item.LNAME, item.PHONE))))

  fetch('http://localhost:3636/forms/69144066531945e2a1979e118a0b3ddd')
  .then(response => response.json())
  .then(response => response.data.map(item => store.dispatch(addForm(item.id, item.title))))

  fetch('http://localhost:3636/formnumbers/1')
  .then(response => response.json())
  .then(response => response.data.map(item => store.dispatch(addFormNumber(item.FORMID, item.FORMNUMBER, item.PHONEID, item.FNAME, item.LNAME, item.PHONE))))
}