var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var routes = require('./routes')

var PORT = process.env.PORT || 3000
var app = express()

app.engine('hbs', hbs({
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded())

app.get('/', routes.index)
app.post('/create-quote', routes.createQuote)
app.get('/list', routes.list)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
