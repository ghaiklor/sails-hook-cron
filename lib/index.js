var createJob = require('./createJob');

module.exports = function (sails) {
  return {
    jobs: {},

    defaults: {cron: {}},

    initialize: function (cb) {
      var config = sails.config.cron;
      var tasks = Object.keys(config);
      tasks.forEach(function (name) {
        this.jobs[name] = createJob({
          cronTime: config[name].schedule,
          onTick: config[name].onTick,
          onComplete: config[name].onComplete,
          start: typeof config[name].start === 'boolean' ? config[name].start : true,
          timezone: config[name].timezone,
          context: config[name].context
        });
      }.bind(this));

      cb();
    }
  };
};
