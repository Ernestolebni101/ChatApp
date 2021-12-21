const GridFsStorage = require('multer-gridfs-storage');
const express = require('express');
const router = express.Router(); // => Para separar cabeceras, metodos, url
const response = require('../../Network/response');
const controller = require('./controller');
const multer = require('multer');


//upload.single('file') ,

//url = https://www.youtube.com/watch?v=srPXMt1Q0nY

router.get('/:chat', (req, res) => {
    
    const filterchat  = req.params.chat || null;

    controller.get_Messages(filterchat)
        .then((store) => {
            response.success(req, res, store, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error. try again later', 500, e);
        })
});

router.post('/',(req, res) => {
    const message = {
        user: req.body.user,
        chat: req.body.chat,
        message: req.body.message
    };
    controller.AddMessage(message)
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

//const errors = validationResult(req.body);
    //console.log(req.body); // => req.body para acceder al cuerpo de la petición en caso de un post  

    //router.get('/', (req, res) => {
//    response.success(req, res, 'Messagin Center alive');
//});
//middleware es un punto donde va a pasar antes de entrar a la dirrec

//var storage = multer.diskStorage({
//    destination: (req, file, cb) => {
 //     cb(null, './uploads')
//    },
//    filename:  (req, file, cb) => {
//      cb(null, file.originalname)
//    }
//})
//

//var upload = multer({ storage: storage })