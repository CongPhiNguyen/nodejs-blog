const path = require('path');
const express = require('express');
const exphandlebars  = require('express-handlebars');
const app = express();
const port = 3000;
const morgan =  require('morgan');
const route = require('./routes');

// const window = require('window');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json())
//HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', exphandlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})