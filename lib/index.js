var createJob = require('./createJob');

module.exports = function (sails) {
  return {
    defaults: {},

    initialize: function (cb) {
      var config = sails.config.cron;
      var tasks = Object.keys(config);

      tasks.forEach(function (time) {
        return createJob({
          cronTime: time,
          onTick: config[time] instanceof Function ? config[time] : config[time].onTick,
          onComplete: config[time].onComplete,
          timezone: config[time].timezone
        });
      });

      cb();
    }
  };
};
