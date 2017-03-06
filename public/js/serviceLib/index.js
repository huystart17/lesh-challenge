/**
 * Created by huy on 3/3/17.
 */
const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const io = require('socket.io-client');
const authentication= require('feathers-authentication/client')

const socket = io();
const AppService = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(authentication({ storage: window.localStorage }));


module.exports = AppService;
