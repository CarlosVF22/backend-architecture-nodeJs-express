const express = require('express');

const playersRouter = require('./playersRouter');

function routerApi(app){
    const router = express.Router();
    const apiVersion = 'v1';
    app.use(`/api/${apiVersion}`, router);
    router.use('/players', playersRouter);
}

module.exports = routerApi;