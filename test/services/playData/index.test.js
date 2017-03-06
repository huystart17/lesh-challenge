'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('playData service', function() {
  it('registered the playData service', () => {
    assert.ok(app.service('playData'));
  });
});
