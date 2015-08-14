# Changelog

## 2.0.0

- Improvement: Implement named jobs. Now you able to set name for job, not a schedule;
- Improvement: You able to define jobs for the same schedule;
- Fix: Sails is not defined when cron job is starting;

## 1.0.0

- Initial release;
- Implement loading cron tasks from `sails.config.cron`;
- Implement returning created jobs in `sails.hooks.cron.jobs`;
