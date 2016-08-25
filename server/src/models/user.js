import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  starProd: Array,
  starNews: Array,
  purchase: Array,
});

export default userSchema;
