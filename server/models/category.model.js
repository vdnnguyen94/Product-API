import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
  },
});

//const CategoryModel = mongoose.model('Category', CategorySchema);

export default mongoose.model('Category', CategorySchema);