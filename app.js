// jshint esversion: 9
const http = require('http');

const express = require('express');

const app = express();
// Use allows us to add a new middleware function, now the use method is pretty flexible, it accepts an array of so-called request handlers here and it has some other use cases too. Now one easy way of using it is that you simply pass a function to it and this function here, this function you pass to app use will be executed for every incoming request and this function will receive three arguments,
app.use((req, res, next) => {// next argument, basically this function you're receiving here has to be executed to allow the request to travel on to the next middleware.
  console.log('first middleware')
  // we have to call next here to allow the request to travel on to the next middleware in line. So it basically goes from top to bottom through that file you could say, through all the middleware functions but only if we call next, if we don't call next it just dies, so if we don't call next, we should actually send back a response because otherwise the request can't continue its journey, so it will never reach a place where we might send a response but if we also don't send one here, well then we never send one.
  next();
})

app.use((req, res, next) => {
  console.log('second middleware')
  res.end('<h1>hello from express!</h1>')
})

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000)

