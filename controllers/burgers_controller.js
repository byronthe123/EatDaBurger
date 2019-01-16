const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res, next) => {
    burger.selectAll((err, data) => {
        if(err) {
            return next(err);
        }
        // return res.send(data);
        return res.render('index', {burgers: data});
    })
});

router.post('/api/:burgerName', (req, res, next) => {
    console.log(req.params.burgerName);
    console.log(req.body);
    const burgerName = req.body.burgerName;
    burger.insertOne(burgerName, (err, success) => {
        if(err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.put('/api/:id', (req, res, next) => {
    console.log(req.params);
    console.log(req.params.id);
    const burgerId = req.params.id;
    burger.updateOne('devoured', 1, 'id', burgerId, (err, success) => {
        if(err) {
            return next(err);
        }
        res.redirect('/');
    })
});

module.exports = router;