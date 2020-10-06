import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home"; 
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Registration from './components/Registration/Registration';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className = "App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <PrivateRoute path="/register">
              <Registration />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
