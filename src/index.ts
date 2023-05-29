import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello Mazba!');
});
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
