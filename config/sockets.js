
/**
 * Module dependencies.
 */

var express = require('express'),
    mongoStore = require('connect-mongo')(express),
    flash = require('connect-flash'),
    helpers = require('view-helpers');

module.exports = function (app, config, passport, io) {

    io.sockets.on('connection', function (socket) {
        // socket.emit('news', { hello: 'world' });
        // socket.on('my other event', function (data) {
        //     console.log(data);
        // });
    });
 
};
