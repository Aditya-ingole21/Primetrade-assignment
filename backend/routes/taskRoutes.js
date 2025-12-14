const express = require('express');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.use(protect); // All task routes are protected

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks (admin sees all, user sees own)
 *     security: [{ cookieAuth: [] }]
 *     responses:
 *       200: { description: Success }
 *   post:
 *     summary: Create new task
 *     security: [{ cookieAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               description: { type: string }
 *               completed: { type: boolean }
 *     responses:
 *       201: { description: Created }
 */
router.route('/')
  .get(getTasks)
  .post(createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update task
 *     security: [{ cookieAuth: [] }]
 *   delete:
 *     summary: Delete task
 *     security: [{ cookieAuth: [] }]
 */
router.route('/:id')
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;