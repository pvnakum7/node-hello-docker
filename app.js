const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello, Docker World!\n');
});

app.listen(3000, '0.0.0.0');