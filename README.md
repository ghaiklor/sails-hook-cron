# sails-hook-cron

![Build Status](https://img.shields.io/travis/ghaiklor/sails-hook-cron.svg) ![Coverage](https://img.shields.io/coveralls/ghaiklor/sails-hook-cron.svg) ![Downloads](https://img.shields.io/npm/dm/sails-hook-cron.svg) ![npm version](https://img.shields.io/npm/v/sails-hook-cron.svg) ![dependencies](https://img.shields.io/david/ghaiklor/sails-hook-cron.svg) ![dev dependencies](https://img.shields.io/david/dev/ghaiklor/sails-hook-cron.svg) ![License](https://img.shields.io/npm/l/sails-hook-cron.svg)

Sails hook for running cron tasks.

## Getting Started

Install it via npm:

```shell
npm install sails-hook-cron
```

And configure `config/cron.js` file in your project:

```javascript
module.exports.cron = {
  '* * * * * *': function onTick() {
    console.log('You will see this every second');
  }
};
```

## Examples

You can pass different formats of cron tasks.

Just cron pattern with callback when cron task is executing:

```javascript
module.exports.cron = {
  '* * * * * *': function onTick() {
    console.log('You will see this every second');
  }
};
```

It can be cron pattern with object:

```javascript
module.exports.cron = {
  '* * * * * *': {
    onTick: function() {
      console.log('I am triggering when time is come');
    },
    onComplete: function() {
      console.log('I am triggering when job is complete');
    },
    timezone: 'Ukraine/Kiev'
  }
};
```

## License

The MIT License (MIT)

Copyright (c) 2015 Eugene Obrezkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
