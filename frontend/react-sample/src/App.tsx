import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ApolloProvider } from '@apollo/client';
import client from './constants/API';
import AuthWrapper from './constants/context';
import MenuBarContainer from './containers/common/MenuBarContainer';
import Homepage from './view/Homepage';
import LoginPage from './view/LoginPage';
import RegisterPage from './view/RegisterPage';
import PostPage from './view/PostPage';
import AuthRoute from './components/common/AuthRoute';

import 'semantic-ui-css/semantic.min.css';
import './styles/app.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthWrapper>
        <Router>
          <Container>
            <MenuBarContainer />
            <Route exact path="/" component={Homepage} />
            <AuthRoute exact path="/login" renderComponent={LoginPage} />
            <AuthRoute exact path="/register" renderComponent={RegisterPage} />
            <Route exact path="/posts/:postId" component={PostPage} />
          </Container>
        </Router>
      </AuthWrapper>
    </ApolloProvider>
  );
}

export default App;
