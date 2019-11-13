import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import './App.css';
import AdsContainer from './ads/AdsContainer';
import AdContainer from './ads/AdContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <AdsContainer />
          </Route>
          <Route path="/ads/:id" component={AdContainer} />
          <Route path="*">
            <h1>404 Not Found!</h1>
            <p>Oops! That page doesn't exist.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
