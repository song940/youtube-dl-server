const http = require('http');
const kelp = require('kelp');
const send = require('kelp-send');
const body = require('kelp-body');
const ytdl = require('./ytdl');

const app = kelp();

app.use(send);
app.use(body);
app.use((req, res) => {
  const { url, ...options } = req.query;
  res.send(ytdl(url, options));
});

http.createServer(app).listen(3000);