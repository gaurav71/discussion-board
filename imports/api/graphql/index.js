import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { queries, mutations } from "./resolvers";
import { schemaArray } from "./typedefs";

const typeDefs = schemaArray

const resolvers = {
  Query: {
    ...queries
  },
  Mutation: {
    ...mutations
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res, connection }) => ({
    req,
    res,
    connection
  })
})

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
})

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end()
  }
})