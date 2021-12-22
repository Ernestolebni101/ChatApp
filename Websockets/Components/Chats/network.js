const express = require('express');
const response = require('../../Network/response');
const controller = require('./controller');
const router = express.Router();


router.post('/', (req, res) => {

    const chats = {
        users: req.body.users,
        date: new Date()
    }
    controller.addChat(chats)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/:userId', (req, res) => {

    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.delete('/:chatid', (req, res) => {
    controller.deleteChats(req.params.chatid)
    .then(() => {
        response.success(req, res, `user ${req.params.chatid} deleted`, 200);
    })
    .catch((e) => {
        response.error(req, res, 'Internal Server Error', 500, e);
    });
});

module.exports = router; 