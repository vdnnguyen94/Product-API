import Category from '../models/category.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

// Create a new category
const create = async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();
    return res.status(200).json({
      message: "Category created successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Get a list of all categories
const list = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Get category by ID
const categoryByID = async (req, res, next, id) => {
  try {
    let category = await Category.findById(id);
    if (!category) {
      return res.status(400).json({
        error: "Category not found",
      });
    }
    req.category = category;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve category",
    });
  }
};

// Read a single category
const read = (req, res) => {
  return res.json(req.category);
};

// Update a category
const update = async (req, res) => {
  try {
    let category = req.category;
    category = extend(category, req.body);
    category.updated = Date.now();
    await category.save();
    res.json(category);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Delete a category
const remove = async (req, res) => {
  try {
    let category = req.category;
    let deletedCategory = await category.remove();
    res.json(deletedCategory);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { create, categoryByID, read, list, remove, update };
