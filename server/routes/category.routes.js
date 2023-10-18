import express from 'express';
import categoryCtrl from '../controllers/category.controller.js';

const router = express.Router();

// Routes for category-related operations
router.route('/api/categories')
  .get(categoryCtrl.list)
  .post(categoryCtrl.create);

router.route('/api/categories/:categoryId')
  .delete(categoryCtrl.remove);

router.param('categoryId', categoryCtrl.categoryByID);

export default router;
