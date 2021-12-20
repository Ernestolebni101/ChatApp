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
    const usermodel = {
        name: req.body.name,
        lastname: req.body.lastname,
        birthdate: req.body.birthdate,
    };
    controller.addUser(usermodel)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
});

router.delete('/:uid', (req, res) => {
    controller.deleteUser(req.params.uid)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal Server error', 500, e);
        })
});

router.put('/:uid', (req, res) => {
    const usermodel = {
        name: req.body.name,
        lastname: req.body.lastname,
        birthdate: req.body.birthdate,
    };

    let uid = req.params.uid;

    controller.updatUser(uid, usermodel)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(e => {
            response.error(req, res, 'Internal Server Error', 500, e);
        });
});

module.exports = router;    