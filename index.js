var express = require('express')
var app = express()
const craigslist = require('node-craigslist');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/dist'))

app.get('/', function(request, response) {
  response.render('index')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

app.get('/craigslist/search', function(req, res) {
  // Search craigslist with url query
  const client = new craigslist.Client({
    baseHost : 'craigslist.com',
    city : 'Boston'
  });
  // options, query
  client.search(req.query, req.query.keywords)
    .then(listings => {
      res.json(listings);
    })
    .catch(err => console.error(err));
});