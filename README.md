# sails-hook-cron

![Build Status](https://img.shields.io/travis/ghaiklor/sails-hook-cron.svg)
![Coverage](https://img.shields.io/coveralls/ghaiklor/sails-hook-cron.svg)
![Downloads](https://img.shields.io/npm/dm/sails-hook-cron.svg)
![Downloads](https://img.shields.io/npm/dt/sails-hook-cron.svg)
![npm version](https://img.shields.io/npm/v/sails-hook-cron.svg)

[![GitHub followers](https://img.shields.io/github/followers/ghaiklor.svg?label=Follow&style=social)](https://github.com/ghaiklor)
[![Twitter Follow](https://img.shields.io/twitter/follow/ghaiklor.svg?label=Follow&style=social)](https://twitter.com/ghaiklor)

Sails hook for running cron tasks.

## Getting Started

Install it via npm:

```shell
npm install sails-hook-cron
```

Configure `config/cron.js` in your project:

```javascript
module.exports.cron = {
  myFirstJob: {
    schedule: '* * * * * *',
    onTick: function () {
      console.log('You will see this every second');
      console.log(`Also, sails object is available as this, e.g. ${this.config.environment}`);
    }
  }
};
```

## Examples

Schedule field syntax is:

```javascript

// ['seconds', 'minutes', 'hours', 'dayOfMonth', 'month', 'dayOfWeek']

module.exports.cron = {
  firstJob: {
    schedule: '30 47 15 17 may *',
    // in May 17 15:47:30 GMT-0300 (BRT)
    onTick: function() {
      console.log('I will trigger in May 17 15:47:30');
    },
    timezone: 'America/Sao_Paulo'
    // timezone Brazil example
  }
};
```

You can define cron tasks only with required fields:

```javascript
module.exports.cron = {
  firstJob: {
    schedule: '* * * * * *',
    onTick: function() {
      console.log('I am triggering every second');
    }
  },

  secondJob: {
    schedule: '*/5 * * * * *',
    onTick: function() {
      console.log('I am triggering every five seconds');
    }
  }
};
```

You can define advanced fields:

```javascript
module.exports.cron = {
  myJob: {
    schedule: '* * * * * *',
    onTick: function() {
      console.log('I am triggering when time is come');
    },
    onComplete: function() {
      console.log('I am triggering when job is complete');
    },
    start: true, // Start task immediately
    timezone: 'Ukraine/Kiev', // Custom timezone
    context: undefined, // Custom context for onTick callback
    runOnInit: true // Will fire your onTick function as soon as the request initialization has happened.
  }
};
```

You can get created jobs and start\stop them when you wish:

```javascript
// config/cron.js
module.exports.cron = {
  myJob: {
    schedule: '* * * * * *',
    onTick: function() {
      console.log('I am triggering when time is come');
    },
    start: false
  }
};

// api/controllers/SomeController.js
module.exports = {
  someAction: function(req, res) {
    sails.hooks.cron.jobs.myJob.start();
    sails.hooks.cron.jobs.myJob.stop();
  }
};
```

## Context

There are three states for the context, i.e. this on `onTick` call:

- When you don’t declare context - `this` points to the Sails object.
- If you declare it as a null (`context: null`), `this` points to the original context from the cron library.
- Otherwise, if you declare a context with some object (`context: {foo: 'bar'}`), `this` will point to the object instead.

## License

[MIT](./LICENSE)
