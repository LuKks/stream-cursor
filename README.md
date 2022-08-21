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

![Peek 2022-08-21 16-07](https://user-images.githubusercontent.com/12686176/185806996-71dd1e99-8677-4634-bf7e-d28b89154417.gif)

## License
MIT
