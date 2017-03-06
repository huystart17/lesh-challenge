/**
 * Created by huy on 3/6/17.
 */
var m = require('mithril');
var Panel = {
  isLogin: true,
  oninit: function () {

  },
  view: function () {
    return this.isLogin ?
      m('.db.br.h-100.ma0.pa0', m('ul.list.ma0.pa0', [
        m('li', m('button.w-100.f6.link.dim.br1.ba.ph3.pv2.mb2.dib.dark-gray', m('img',{src :'img/lesh-logo.jpg'}))),
        m('li', m('button.w-100.f6.link.dim.br1.ba.ph3.pv2.mb2.dib.dark-gray', 'Your Account')),
        m('hr'),
        m('li', m('button.w-100.f6.link.dim.br1.ba.ph3.pv2.mb2.dib.dark-gray', 'English Mine Room')),
        m('li', m('button.w-100.f6.link.dim.br1.ba.ph3.pv2.mb2.dib.dark-gray', 'English Challenge Room')),
        m('hr'),
        m('li', m('button.w-100.f6.link.dim.br1.ba.ph3.pv2.mb2.dib.dark-gray', 'Friends')),
        m('li', m('button.w-100.f6.link.dim.br1.ba.ph3.pv2.mb2.dib.dark-gray', 'Logout'))
      ])) :
      m('.db', m('ul.list.', [
        m('li', m('button', 'Login')),
        m('li', m('button', 'Sign up'))
      ]))
  }
};
module.exports= Panel
