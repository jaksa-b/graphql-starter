import express from 'express'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './schema'
import resolvers from './resolvers'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/graphqlDB')

const app = express()
const path = '/graphql'

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)