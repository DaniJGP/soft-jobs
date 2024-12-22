const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

// App
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routers
app.use('/', authRouter);
app.use('/', userRouter);

// Error handler
app.use(errorMiddleware);

module.exports = app;
