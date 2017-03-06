/**
 * Created by huy on 3/5/17.
 */
module.exports = function (io) {
  io.on('connection', function (socket) {
    console.log('some one connect');
  });
};
