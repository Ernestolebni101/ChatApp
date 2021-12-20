const express = require('express');
const response = require('../../Network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    const filter = req.query.name || null;
    
    controller.getUser(filter)
        .then((store) => {
            response.success(req, res, store, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error. try again later', 500, e);
        })
});

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
});

module.exports = router;