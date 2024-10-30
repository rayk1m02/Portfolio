// express is a web fraemwork for Node.js that simplifies process of building server-side apps and APIs.
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import introRoutes from './routes/intro';

dotenv.config({path: '../.env'});

const app = express();
const port = 5001; // port 5000 taken by ControlCe (Apple)

// JSON parsing middleware
app.use(express.json());
app.use('/api/intro', introRoutes);

const MONGO_URI = process.env.MONGO_URI 
if (!MONGO_URI) { throw new Error('MONGO_URI environment variable not set'); }

// Define router handler for HTTP GET requests to root URL ('/')
// app.get('/', (req, res) => {
//   res.send('Backend is running');
// });

// establish connection to MongoDB database
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
