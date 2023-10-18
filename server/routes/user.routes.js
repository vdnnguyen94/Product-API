import express from 'express';
import userCtrl from '../controllers/user.controller.js';

const router = express.Router();

// Welcome message route
router.route('/')
  .get((_req, res) => {
    res.status(200).json({ message: "Welcome to DressStore Application" });
  });

// Routes for user-related operations
router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create);

router.route('/api/users/:userId')
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

router.param('userId', userCtrl.userByID);


export default router;
