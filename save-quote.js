var fs = require('fs')
var getQuotes = require('./get-quotes')
var quotesFile = require('./quotes-filename')

module.exports = function (quote, callback) {
  getQuotes(function (err, quotes) {
    if (err) {
      callback(err)
    } else {
      quotes.push(quote)
      var json = JSON.stringify(quotes)
      fs.writeFile(quotesFile, json, callback)
    }
  })
}
