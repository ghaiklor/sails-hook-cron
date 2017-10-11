const { CronJob } = require('cron');

module.exports = function (sails) {
  return {
    jobs: {},

    defaults: { cron: {} },

    initialize: function (cb) {
      const config = sails.config.cron;
      const jobs = Object.keys(config);

      sails.on('ready', () => {
        jobs.forEach(job => {
          this.jobs[job] = new CronJob(
            config[job].schedule,
            config[job].onTick,
            config[job].onComplete,
            typeof config[job].start === 'boolean' ? config[job].start : true,
            config[job].timezone,
            config[job].context,
            typeof config[job].runOnInit === 'boolean' ? config[job].runOnInit : false
          );
        });
      });

      cb();
    }
  };
};
