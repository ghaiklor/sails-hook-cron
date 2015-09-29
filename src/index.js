import { CronJob } from 'cron';

export default function (sails) {
  return {
    jobs: {},

    defaults: {cron: {}},

    initialize: function (cb) {
      let config = sails.config.cron;
      let jobs = Object.keys(config);

      sails.on('ready', () => {
        jobs.forEach(job => {
          this.jobs[job] = new CronJob({
            cronTime: config[job].schedule,
            onTick: config[job].onTick,
            onComplete: config[job].onComplete,
            start: typeof config[job].start === 'boolean' ? config[job].start : true,
            timezone: config[job].timezone,
            context: config[job].context
          });
        });
      });

      cb();
    }
  };
}
