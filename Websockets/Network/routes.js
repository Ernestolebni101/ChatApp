const express = require("express");
const message = require('../Components/Messages/network');
const user = require('../Components/Users/network');
const chats = require('../Components/Chats/network');
// Función para añadir todas las rutas y anticiparse al crecimiento de los archivos de 
//enrutamiento

const routes = (server) => {
    server.use('/messages', message);
    server.use('/users',user);
    server.use('/chats',chats);
}

module.exports = routes;