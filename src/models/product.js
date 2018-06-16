import mongoose from 'mongoose'
const Schema = mongoose.Schema


const ProductShema = new Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  }
})

export default mongoose.model('product', ProductShema)