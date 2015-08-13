var assert = require('chai').assert;
var Sails = require('sails').Sails;

describe('sails-hook-cron::main', function () {
  var sails;

  before(function (done) {
    this.timeout(10000);

    Sails().lift({
      cron: {
        '* * * * * 1': console.log,
        '* * * * * 2': {
          onTick: console.log,
          onComplete: console.log,
          timezone: 'Europe/Kiev'
        }
      },
      hooks: {
        "cron": require('../../'),
        "csrf": false,
        "grunt": false,
        "i18n": false,
        "pubsub": false,
        "session": false,
        "views": false
      }
    }, function (error, _sails) {
      if (error) return done(error);
      sails = _sails;
      return done();
    });
  });

  after(function (done) {
    return sails ? sails.lower(done) : done();
  });

  it('Should properly load cron hook', function () {
    assert.isObject(sails.config.cron);
    assert.isObject(sails.hooks.cron);
  });

  it('Should properly load cron tasks', function () {
    assert.isUndefined(sails.hooks.cron.jobs['* * * * * 1'].onComplete);
    assert.isFunction(sails.hooks.cron.jobs['* * * * * 2'].onComplete);
  });
});
