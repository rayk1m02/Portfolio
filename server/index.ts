// express is a web fraemwork for Node.js that simplifies process of building server-side apps and APIs.
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 5000;
// JSON parsing middleware
app.use(express.json());

// Define router handler for HTTP GET requests to root URL ('/')
app.get('/', (req, res) => {
  res.send('Backend is running');
});

const MONGO_URI = 'your-mongo-db-string';

// establish connection to MongoDB database
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));