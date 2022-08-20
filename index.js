const countBreakLines = require('count-break-lines')

module.exports = function streamCursor (stream) {
  const updating = stream.isTTY
  let totalLines = 0

  cursor.clear = clear
  cursor.end = end
  return cursor

  function cursor (...args) {
    clear()
    const data = args.join(' ')
    totalLines = 1 + countBreakLines(data, stream.columns)
    stream.write(data + '\n')
  }

  function clear () {
    if (!updating) return
    if (!totalLines) return

    stream.cursorTo(0)

    for (let i = 0; i < totalLines; i++) {
      stream.moveCursor(0, -1)
      stream.clearLine(1)
    }

    totalLines = 0
  }

  function end (...args) {
    clear()
    const data = args.join(' ')
    totalLines = 0
    stream.write(data + '\n')
  }
}
