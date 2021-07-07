import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { MeteorAccountsLink } from 'meteor/apollo'
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token,
    }
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    new MeteorAccountsLink(),
    authLink.concat(httpLink),
  ]),
  cache: new InMemoryCache()
})

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('react-target')
  );
});