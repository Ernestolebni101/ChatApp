const express = require('express');
const router = express.Router(); // => Para separar cabeceras, metodos, url
const response = require('../../Network/response');
const controller = require('./controller');

//router.get('/', (req, res) => {
//    response.success(req, res, 'Messagin Center alive');
//});

router.get('/', (req, res) => {
    const filterMessages  = req.query.user || null;

    controller.get_Messages(filterMessages)
        .then((store) => {
            response.success(req, res, store, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error. try again later', 500, e);
        })
});

router.post('/', (req, res) => {

    //const errors = validationResult(req.body);
    console.log(req.body); // => req.body para acceder al cuerpo de la petición en caso de un post  
    controller.AddMessage(req.body.user, req.body.message)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Invalid data', 400, 'Error en el controlador');
        });
});

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Error del Servidor', 500, e);
        });
});

router.delete('/', (req, res) => {
    console.log(req.query); // => req.query para acceder a los parámetros
    console.log(req.body);
    res.send('this message is for you ' + req.body.text);
});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `user ${req.params.id} deleted`, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Internal Server Error', 500, e);
        });
});

module.exports = router;

//console.log(req.query); // => req.query para acceder a los parámetros
//console.log(req.headers);
//res.header({
//    'custom-header': 'Una cadena'
//});