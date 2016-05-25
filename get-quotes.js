var fs = require('fs')
var quotesFile = require('./quotes-filename')

module.exports = function (callback) {
  fs.readFile(quotesFile, function (err, buffer) {
    if (err) {
      callback(err, null)
    } else {
      var json = buffer.toString()
      var quotes = JSON.parse(json)
      callback(null, quotes)
    }
  })
}
