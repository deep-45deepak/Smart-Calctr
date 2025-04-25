const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/jobScheduling', (req, res) => {
  res.render('jobScheduling');
});

app.get('/transitiveClosure', (req, res) => {
  res.render('transitiveClosure');
});

app.get('/prims', (req, res) => {
  res.render('prims');
});

app.get('/kruskals', (req, res) => {
  res.render('kruskals');
});

app.get('/dijkstras', (req, res) => {
  res.render('Dijikstras');
});

app.get('KnapSack', (req, res) => {
  res.render('KnapSack');
});

app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})