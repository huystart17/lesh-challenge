/**
 * Created by huy on 3/6/17.
 */
var m = require('mithril')
var Panel = require('./Panel');

var App= {
  oninit: function () {

  },
  isLogin : function () {

  },
  view: function () {
    return m('.db', [
      m('#lesh-panel.db.fl.w-20', m(Panel)),
      m('#lesh-content.db.fl.w-80.bg-light-yellow', m('h3', 'Welcome'))
    ])
  }
};

module.exports = App
