'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('onlineData service', function() {
  it('registered the onlineData service', () => {
    assert.ok(app.service('onlineData'));
  });
});
