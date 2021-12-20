const express = require("express");
const messages = require('../Components/Messages/network');
const users = require('../Components/Users/network');
const chats = require('../Components/Chats/network');
// Función para añadir todas las rutas y anticiparse al crecimiento de los archivos de 
//enrutamiento

const routes = (server) => {
    server.use('/messages', messages);
    server.use('/users',users);
    server.use('/chats',chats);
}

module.exports = routes;