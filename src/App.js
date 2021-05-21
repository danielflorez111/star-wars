import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Characters from './pages/Characters';
import CharacterDetail from './pages/CharacterDetail';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/characters" component={Characters} />
          {/* TODO: Implement detail page */}
          <PrivateRoute exact path="/characters/:id" component={CharacterDetail} />
          <Route path='*' component={() => <h1>404 Page not found</h1>} />
        </Switch>
      </Router>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f1f2ed;
  }
`;

export default App;
