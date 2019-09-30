import React from 'react';
import axios from 'axios'
import Navbar from './containers/navbar';
import Dashboard from './containers/dashboard';
import Numbers from './containers/numbers';
import Calls from './containers/callsContainer';
import FormContainer from './containers/formContainer';
import LoadingComponent from './containers/loadingContainer';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

import addNumber from './actions/addNumberAction';
import addForm from './actions/addFormAction';
import addFormNumber from './actions/addFormNumberAction';
import addCallLog from './actions/addCallLogsAction'
import setFetch from './actions/setFetchAction';
import logDetails from './actions/logDetailsAction';
import setDashboardCards from './actions/setDashboardCardsAction';
import setGraphData from './actions/setGraphAction';


var store = createStore(rootReducer,{},
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      link: 'https://dfff6335.ngrok.io'
    }
  }

  

  componentWillMount(){
    axios.all([
      axios.post(`${this.state.link}/logs/1`),
      axios.get(`${this.state.link}/numbers/1`),
      axios.get(`${this.state.link}/forms/69144066531945e2a1979e118a0b3ddd`),
      axios.get(`${this.state.link}/dashboard/1`),
      axios.get(`${this.state.link}/graph/1`)
      
      // axios.get('http://localhost:3636/formnumbers/1')
    ]).then(axios.spread((callLogs, numbers, forms, cards, graphData) => {
      numbers.data.data.map(item => store.dispatch(addNumber(item.PHONEID, item.FNAME, item.LNAME, item.PHONE)));
      forms.data.data.map(item => store.dispatch(addForm(item.id, item.title)));
      callLogs.data.data.map(item => store.dispatch(addCallLog(item.LOGID, item.CALLSTATUS, item.FORMID, item.SUBID, item.CALLSID, item.FNAME, item.LNAME, item.PHONE, item.FORMNUMBER)));
      cards.data.data.map(item => store.dispatch(setDashboardCards(item.TOTALCALL, item.CALL1, item.CALL2, item.TOTALNUMBER, item.NUMBER1, item.NUMBER2, item.TOTALSUB, item.SUB1, item.SUB2, item.TOTALFAILED, item.FAILED1, item.FAILED2)))
      store.dispatch(setGraphData(graphData.data.data));
      // formNumbers.data.data.map(item => store.dispatch(addFormNumber(item.FORMID, item.FORMNUMBER, item.PHONEID, item.FNAME, item.LNAME, item.PHONE)))
      store.dispatch(setFetch(true));
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
                  <Route path="/calls/:callSID?" component={Calls} />
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