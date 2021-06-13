import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Create from './pages/Create/Create';
import Courses from './pages/Courses/Courses';
import Notification from './pages/Notification/Notification';

const App = () => {
  
  const renderRoutes = () => {
    return (
      <>
        <Route
          path="/"
          exact
          render={() => <Login/>}
        />
        <Route
          path="/login"
          render={() => {
            return <Login/>;
          }}
        />
        <Route
          path="/create"
          render={() => {
            return <Create/>;
          }}
        />
        <Route
          path="/dashboard"
          render={() => {
            return <Dashboard/>;
          }}
        />
        <Route
          path="/courses"
          render={() => {
            return <Courses/>;
          }}
        />
        <Route
          path="/notification"
          render={() => {
            return <Notification/>;
          }}
        />
      </>
    );
  };

  return (
    <Router>
      {renderRoutes()}
    </Router>
  );
}

export default App;