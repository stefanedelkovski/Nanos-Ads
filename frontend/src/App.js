import React from 'react';
import './App.css';
import TabularData from './Components/TableRow';
import Details from './Components/Details';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router';

function App() {
  
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/index" />
          </Route>
          <Route path="/index" component={TabularData}></Route>
          <Route path="/details/:name/" component={Details}></Route>
        </Switch> 
      </Router>
    );
}

export default App;
