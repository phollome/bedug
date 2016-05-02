# bedug

A logging middleware for Node.js.

## Usage

*Note: The current version works only with [debug](https://www.npmjs.com/package/debug) as consumer.*

### with [debug](https://www.npmjs.com/package/debug)

```
var b = require('bebug')('your-app', require('debug'));

b.info('An Info!');               //--> info::your-app An Info! 
b.log('Simple log');              //--> log::your-app Simple log
b.warn('Beware of the Leopard');  //--> warn::your-app Beware of the Leopard!
b.error('An ERROR!!!');           //--> error::your app An ERROR!!!

```

## Plans for Logging Consumer

- Unix-Sockets
- Socket.IO
- Files
- Redis




