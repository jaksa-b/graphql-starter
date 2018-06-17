import Product from './models/product'

const resolvers = {
  Query: {
    async product (_, { _id }) {
      return await Product.findOne({_id})
    },
    async products () {
      return await Product.find()
    }
  },
  Mutation: {
    async createProduct(_, {input}) {
      return await Product.create(input)
    },
    async updateProduct(_, { _id, input}) {
      return await Product.findOneAndUpdate( { _id }, input, { new: true} )
    },
    async deleteProduct(_, { _id}) {
      return await Product.findByIdAndRemove  ({ _id })
    }
  }
}

export default resolvers