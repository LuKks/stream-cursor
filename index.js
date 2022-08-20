const countBreakLines = require('count-break-lines')

module.exports = function streamCursor (stream) {
  const updating = stream.isTTY
  let breakLines = 0

  cursor.clear = clear
  cursor.end = end
  return cursor

  function cursor (...args) {
    clear()
    const data = args.join(' ')
    breakLines = countBreakLines(data, stream.columns)
    stream.write(data + '\n')
  }

  function clear () {
    if (!updating) return
    if (!breakLines) return

    stream.cursorTo(0)

    for (let i = 0; i < breakLines; i++) {
      stream.moveCursor(0, -1)
      stream.clearLine(1)
    }

    breakLines = 0
  }

  function end (...args) {
    clear()
    const data = args.join(' ')
    breakLines = 0
    stream.write(data + '\n')
  }
}
