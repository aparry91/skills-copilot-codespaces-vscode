// create web server
// import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments_controller');

// handle request
router.get('/', commentsController.comments_list);
router.get('/create', commentsController.comments_create_get);
router.post('/create', commentsController.comments_create_post);
router.get('/:id/delete', commentsController.comments_delete_get);
router.post('/:id/delete', commentsController.comments_delete_post);
router.get('/:id/update', commentsController.comments_update_get);
router.post('/:id/update', commentsController.comments_update_post);
router.get('/:id', commentsController.comments_detail);


