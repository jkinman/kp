const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const logger = require('morgan')

const email = require('./email')

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));
app.use(logger('dev'));

app.get( '/list/:email', (req, res) => {
  email(req.params.email, (err, message) => {
    console.log(message)
    console.log(req.params)
    if( err ){
      res.status(500)
    }

      res.status(200)
      res.send(err || message)

  })
})

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);