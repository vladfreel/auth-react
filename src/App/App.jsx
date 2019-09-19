import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { HomePage } from '../HomePage/HomePage';
import { LoginPage } from '../LoginPage/LoginPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export { App };