'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('score service', function() {
  it('registered the scores service', () => {
    assert.ok(app.service('scores'));
  });
});
