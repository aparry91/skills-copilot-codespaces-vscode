// Create web server
// 1. Create a web server
// 2. Create an API endpoint to handle incoming POST requests
// 3. Parse incoming POST request body
// 4. Save data to file
// 5. Redirect user to home page
// 6. Create an API endpoint to handle incoming GET requests
// 7. Read data from file
// 8. Return data to user
// 9. Create an API endpoint to handle incoming DELETE requests
// 10. Delete comment from file
// 11. Redirect user to home page
// 12. Create an API endpoint to handle incoming PUT requests
// 13. Update comment in file
// 14. Redirect user to home page

// 1. Create a web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// 2. Create an API endpoint to handle incoming POST requests
app.post('/api/comments', (req, res) => {
  // 3. Parse incoming POST request body
  const comment = req.body.comment;
  const name = req.body.name;
  const email = req.body.email;
  const date = new Date();
  const data = {
    comment: comment,
    name: name,
    email: email,
    date: date
  };
  // 4. Save data to file
  fs.readFile('./comments.json', (err, file) => {
    if (err) {
      console.log(err);
    } else {
      const comments = JSON.parse(file);
      comments.push(data);
      fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) {
          console.log(err);
        } else {
          // 5. Redirect user to home page
          res.redirect('/');
        }
      });
    }
  });
});

// 6. Create an API endpoint to handle incoming GET requests
app.get('/api/comments', (req, res) => {
  // 7. Read data from file
  fs.readFile('./comments.json', (err, file) => {
    if (err) {
      console.log(err);
    } else {
      const comments = JSON.parse(file);
      // 8. Return data to user
      res.json(comments);
    }
  });
});

// 9. Create an API