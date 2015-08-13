var CronJob = require('cron').CronJob;

/**
 * Create cron job based on config
 * @param {Object} config Configuration object
 * @returns {*}
 */
module.exports = function (config) {
  return new CronJob(
    config.cronTime,
    config.onTick,
    config.onComplete,
    config.start || true,
    config.timezone,
    config.context
  );
};
