import React from 'react';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';

const PORT = process.env.PORT || 5001;

const httpLink = createHttpLink({
  uri: `http://localhost:${PORT}`
}) as any;

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return ({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    }
  });
});

const client = new ApolloClient({
  link: authLink.concat(httpLink) as any,
  cache: new InMemoryCache(),
});

export default client;