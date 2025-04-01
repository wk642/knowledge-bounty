import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Testing to make sure it connects to back end
app.get('/test-connection', (req, res) => {
  res.json('Welcome! back end to KNOWLEDGE BOUNTY is connected');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});