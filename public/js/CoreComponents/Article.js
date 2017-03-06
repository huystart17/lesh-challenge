/**
 * Created by huy on 3/6/17.
 */
var m = require('mithril');
var Article = {
  oninit: function () {

  },
  view: function () {
    return m('article.ma1', [
        m('h3', 'Welcome to my app'),
        m('content', 'This app is deadline i wanna to end')
      ]
    )
  }
};
module.exports = Article
