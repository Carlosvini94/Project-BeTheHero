const express = require("express");
const app = express();
const cors = require('cors');
const { errors } = require('celebrate');

const routes = require('./routes.js');

app.use(cors())

//Fazer o app entender json no corpo da requisição 
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);
