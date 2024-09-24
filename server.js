const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hii Girish how are you and how was your works going on?');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
