const express = require('express');
const burgers_controller = require('./controllers/burgers_controller');

const server = express();

// Static server:
server.use(express.static('public'));

// Express body parser: 
server.use(express.urlencoded({extended: true}));
server.use(express.json());

// Handlebars:
const exphbs = require("express-handlebars");
server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

// Use Controller:
server.use(burgers_controller);

// Error Handling:
server.use((req, res, next) => {
    const err = new Error('Not found error');
    err.status = 404;
    next(err);
});

server.use((err, req, res, next) => {
    res.locals.err = err;
    res.status = err.status || 500;
    res.send(`${err}`);
});

const port = (process.env.PORT || 3000);

server.listen(port, () => {
    console.log(`Byron's server is running`);
});