require('dotenv').config();

const express = require('express');
const { connectDb, connectBack } = require('./config/connect');
const configInfo = require('./config/config.json');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.disable('x-powered-by'); //Disable this header, to prevent attacks. (use helmet will be a best protection)
app.use(cors());

/* routes & controllers declaration */
require('./routes')(app, configInfo);

/* connections */
connectDb();
connectBack(app);
