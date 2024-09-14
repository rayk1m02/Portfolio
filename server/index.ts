// express is a web fraemwork for Node.js that simplifies process of building server-side apps and APIs.
import express from 'express';

const app = express();
// JSON parsing middleware
app.use(express.json());

// Define router handler for HTTP GET requests to root URL ('/')
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

