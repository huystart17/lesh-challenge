/**
 * Created by huy on 3/3/17.
 */

var MyModules = {

  SignupForm: {
    oninit: function (vnode) {
    },
    view: function (vnode) {
      return m('form', {
        method: vnode.attrs.method,
        action: vnode.attrs.action,
        onsubmit: function (event) {

        }

      }, [
        m('input[type=text][name=loginName][placeholder=Your login name][required].db'),
        m('input[type=password][name=password][placeholder=Your password][required].db'),
        m('input[type=password][name=cfPasswod][placeholder=Confirm password][required].db'),
        m('input[type=email][name=email][placeholder=Your email][required].db'),
        m('input[type=tel][name=telephone][placeholder=Your TelephoneNumber][required].db'),
        m('input[type=submit].db')
      ])
    }
  },
  ListUserOnline: {
    oninit: function (vnode) {

    },
    view: function (vnode) {
      return m('ul', vnode.attrs.list.map(function (user) {
        return m('li', [
          m('span', user.name),
          m('span', user.status)
        ])
      }))
    }
  },
  ListUserInRoom: {
    oninit: function (vnode) {

    },
    view: function (vnode) {
      return m('ul', vnode.attrs.list.map(function (user) {
        return m('li', [
          m('span', user.name),
          m('span', user.isReady)
        ])
      }))
    }
  },

  ListRoom: {
    oninit: function (vnode) {

    },
    view: function (vnode) {
      return m('ul', vnode.attrs.list.map(function (room) {
        return m('li', [
          m('span', room.id),
          m('span', room.name),
          m('span', room.users.length),
          m('span', room.status),
          m('span', room.money)
        ])
      }))
    }
  },
  EndGameScore: {
    oninit: function (vnode) {

    },
    view: function (vnode) {
      return m('ul', vnode.attrs.list.map(function (score) {
        return m('li', [
          m('span', score.name),
          m('span', score.value)
        ])
      }))
    }
  }, Content: {
    oninit: function (vnode) {

    },
    view: function (vnode) {

    }
  },


  ChallengeTest: {
    oninit: function (vnode) {
      //Default value

    },
    view: function (vnode) {
      return m('ul', vnode.attrs.list.map(function (lesson) {
        if (!lesson.isDone) {
          return m('span', lesson.content)
        }
      }))
    }
  },

  RoomForm: {
    oninit: function (vnode) {

    },
    view: function (vnode) {
      var playData = vnode.attrs;
      var room = playData.room;
      return m('div', [
        m('.room-header', [
          m('h3', room.name),
          m('h4', room.id)
        ]),
        m('.room-body'),
        m('.room-footer')
      ])
    }
  }
};
module.exports = MyModules;
