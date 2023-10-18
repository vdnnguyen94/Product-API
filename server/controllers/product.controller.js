import Product from '../models/product.model.js';
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js';

// Create a new product
const create = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    return res.status(200).json({
      message: "Product created successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Get a list of all products
const list = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Get product by ID
const productByID = async (req, res, next, id) => {
  try {
    let product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({
        error: "Product not found",
      });
    }
    req.product = product;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve product",
    });
  }
};

// Read a single product
const read = (req, res) => {
  return res.json(req.product);
};

// Update a product
const update = async (req, res) => {
  try {
    let product = req.product;
    product = extend(product, req.body);
    product.updated = Date.now();
    await product.save();
    res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Delete a product
const remove = async (req, res) => {
  try {
    const product = req.product;
    await Product.deleteOne({ _id: product._id });
    return res.status(200).json({
      message: "Product DELETED successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const searchProductName = async (req, res) => {
  const fragment = req.url.split('#')[1];

  if (!fragment || !fragment.startsWith('name=')) {
    return res.status(400).json({
      error: "Invalid fragment identifier. Use #name=keyword to search for products by name.",
    });
  }

  const keyword = fragment.split('=')[1];

  try {
    const products = await Product.find({
      name: { $regex: keyword, $options: 'i' }, // Case-insensitive search
    });

    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Delete all products
const removeAll = async (req, res) => {
  console.log("Before REMOVE ALL 1");
  try {
    // Remove all products from the database
    console.log("Before REMOVE ALL");
    //await Product.drop(); NOT WORKING
    await Product.deleteMany({});

    console.log("After REMOVE ALL");
    return res.status(200).json({
      message: "All products removed successfully",
    });
  } catch (err) {
    console.log("CATCH ERROR REMOVE ALL");
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
export default {
  create,
  productByID,
  read,
  list,
  remove,
  update,
  searchProductName,
  removeAll,
};
