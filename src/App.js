import React , { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './views/Pages/Login';
import Dashboard from './views/Dashboard';
import Callback from './services/callback';
import './App.css';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);
// Pages

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            component={Login}
          />
           <Route
            exact
            path="/callback"
            name="callback"
            component={Callback}
          />
          <Route
            exact
            path="/"
            name="home"
            component={Dashboard}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}
}
export default App;
