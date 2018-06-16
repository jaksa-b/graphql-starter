import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from './resolvers'


const typeDefs = `
  type Product {
    _id: ID
    name: String!
    qty: Int
  }
  type Query {
    product(_id: ID): Product
    products: [Product]
  }
  input ProductInput {
    name: String!
    qty: Int
  }
  type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(_id: ID!, input: ProductInput): Product
    deleteProduct(_id: ID!): Product
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers
})