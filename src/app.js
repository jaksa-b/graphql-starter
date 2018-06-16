import express from 'express'
import graphqlHTTP from "express-graphql";
import schema from './schema'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/graphqlDB')

const app = express();
const PORT = 3000;

app.use('/graphiql', graphqlHTTP({
  graphiql: true,
  schema
}))

app.get('/', (req, res) => {
  return res.json({
    msg: 'Hello, graphql here!'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`)
})