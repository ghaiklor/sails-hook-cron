var assert = require('chai').assert;
var createJob = require('../../lib/createJob');

describe('sails-hook-cron::createJob', function () {
  it('Should properly export', function () {
    assert.isFunction(createJob);
  });

  it('Should properly create job', function () {
    var job = createJob({
      cronTime: '* * * * * *',
      onTick: console.log.bind(console, 'onTick'),
      onComplete: console.log.bind(console, 'onComplete'),
      start: true,
      timezone: 'Europe/Kiev',
      context: undefined
    });

    assert.isObject(job.cronTime);
    assert.equal(job.cronTime.source, '* * * * * *');
  });
});
