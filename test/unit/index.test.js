var Sails = require('sails').Sails;

describe('sails-hook-cron', function () {
  var sails;

  before(function (done) {
    this.timeout(10000);

    Sails().lift({
      hooks: {
        "cron": require('../'),
        "grunt": false
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

  it('sails does not crash', function () {
    return true;
  });
});
