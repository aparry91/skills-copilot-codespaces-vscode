// create web server with imports included for comment
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { check } = require('express-validator');

// api/comment
// create a comment
router.post('/', 
    [
        check('comment', 'The comment cannot be empty').not().isEmpty()
    ],
    commentController.createComment
);

// api/comment
// get all comments
router.get('/', 
    commentController.getComments
);

// api/comment/:id
// get all comments by id
router.get('/:id', 
    commentController.getCommentsById
);

// api/comment/:id
// update a comment
router.put('/:id', 
    [
        check('comment', 'The comment cannot be empty').not().isEmpty()
    ],
    commentController.updateComment
);

// api/comment/:id
// delete a comment
router.delete('/:id', 
    commentController.deleteComment
);

module.exports = router;