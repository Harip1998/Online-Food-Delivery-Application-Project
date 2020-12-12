const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const pizzaRouter = require('./routes/pizzaRoutes.js');
const itemRouter = require('./routes/itemRoutes.js');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri = 'mongodb+srv://harinath:harinath_5474@cluster0.b2m3y.mongodb.net/Food_Items?retryWrites=true&w=majority';
app.use(express.json()); // Make sure it comes back as json

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(pizzaRouter);
app.use(itemRouter);

app.listen(4001, () => { console.log('Server is running...') })