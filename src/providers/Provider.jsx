import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { API_URL } from '../utils/constants';
import { getToken } from '../authentication/token';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? token : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

const Provider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default Provider;
