var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var express = require('express');
var http = require('http');
var WebSocket = require('ws');

var app = express();

var server = http.createServer(app);

//var app = new (require('express'))()

var port = process.env.PORT || 5000;



var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: false, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

var wss = new WebSocket.Server({server: server});

wss.on('connection', function connection(ws, req) {
  //const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  console.log('connected')

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  
  setInterval(function() {
    ws.send(JSON.stringify(new Date()));
  }, 1000)
  
  
});

server.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
