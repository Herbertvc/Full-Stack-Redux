var express = require('express')
var app = express()

app.use(express.static('dist'));

app.get('/', function(req, res) {
  // Show the entries.
  res.sendFile('index.html');
})

app.post('/vote', function(req, res) {
  // Execute the vote for the entry selected;
})

app.listen(4000, function() {
  console.log('Server up and ready');
})