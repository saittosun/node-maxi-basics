// jshint esversion: 9
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// urlencoded does whole request body parsing. This parses bodies like the one we're writing here, sent through a form. {extended: false} should be able to parse non-default features.
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', (req, res, next) => {
  console.log('this is always run!');
  next();
})

app.use('/add-product', (req, res, next) => {
  console.log('first middleware')
  // if you are sending a response, this is a good indication that you never want to call next too because you don't want to execute any other response related code just as before with vanilla nodejs, you don't want to send more than one response, this won't work and will result in an error.
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">send</button></form>')
})

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  console.log('second middleware')
  res.end('<h1>hello from express!</h1>')
})

app.listen(3000)

