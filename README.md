# stream-cursor

Rewrite on the same log line.

```
npm i stream-cursor
```

## Usage
```javascript
const streamCursor = require('stream-cursor')

const cursor = streamCursor(process.stderr)

cursor('starting')
setTimeout(() => cursor('multi\nline'), 1000)
setTimeout(() => cursor('hello'), 2000)
setTimeout(() => cursor.clear(), 3000)
setTimeout(() => cursor('hey again'), 4000)
setTimeout(() => cursor.end('final'), 5000)
setTimeout(() => cursor.end('final again'), 6000)

setTimeout(() => {
    setInterval(() => cursor(Date.now()), 10)
}, 7000)
```

## License
MIT
