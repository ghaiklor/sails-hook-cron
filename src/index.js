import { CronJob } from 'cron';

export default function (sails) {
  return {
    jobs: {},

    defaults: {cron: {}},

    initialize: function (cb) {
      let config = sails.config.cron;
      let jobs = Object.keys(config);

      sails.on('ready', () => {
        jobs.forEach(name => {
          this.jobs[name] = new CronJob({
            cronTime: config[name].schedule,
            onTick: config[name].onTick,
            onComplete: config[name].onComplete,
            start: typeof config[name].start === 'boolean' ? config[name].start : true,
            timezone: config[name].timezone,
            context: config[name].context
          });
        });
      });

      cb();
    }
  };
}
