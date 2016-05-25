var data = require('./data')
var getQuotes = require('./get-quotes')
var saveQuote = require('./save-quote')

module.exports = {
  index: index,
  createQuote: createQuote,
  list: list
}

function index (req, res) {
  res.render('index', data.index)
}

function createQuote (req, res) {
  saveQuote(req.body['new-quote'], function (err) {
    if (err) {
      res.sendStatus(500)
    } else {
      res.redirect('/list')
    }
  })
}

function list (req, res) {
  getQuotes(function (err, quotes) {
    var model = {
      quotes: quotes || [],
      title: data.list.title
    }
    if (err) {
      res.sendStatus(500)
    } else {
      res.render('list', model)
    }
  })
}
