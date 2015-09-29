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
          this.jobs[job] = new CronJob(
            config[job].schedule,
            config[job].onTick,
            config[job].onComplete,
            typeof config[job].start === 'boolean' ? config[job].start : true,
            config[job].timezone,
            config[job].context
          );
        });
      });

      cb();
    }
  };
}
