const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const app = express();
const morgan = require('morgan');
const port = 3000;

app.use(morgan('combined'));

app.get('/',(req,res) => {
    res.send('Hello World test on Born to Dev Course');
});

app.listen(port,()=>{
    debug("Listenning port : " + chalk.green(port));
})