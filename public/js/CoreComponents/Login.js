/**
 * Created by huy on 3/6/17.
 */
var m = require('mithril');
var LoginForm= {
  oninit: function (vnode) {

  },
  view: function (vnode) {
    return m('form', {
      method: vnode.attrs.method,
      action: vnode.attrs.action
    }, [
      m('input[type=text][name=loginName][placeholder=Your login name][required].db'),
      m('input[type=email][name=email][placeholder=Your email][required].db'),
      m('input[type=password][name=password][placeholder=Your password][required].db'),
      m('input[type=submit][value=Login].db'),
      m('.db', m("button", "Login by Google")),
      m('.db', m("button", "Login by Facebook")),
    ])
  }
};
var LOGIN = {
  view: function () {
    return m(LoginForm, {action: '/auth/local', method: 'post'})
  }
};
module.exports =LOGIN;
