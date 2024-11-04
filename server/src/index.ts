import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import introRoutes from './routes/intro';
import cors from 'cors';

dotenv.config({path: '../.env'});

const app = express();
const port = 5001; // port 5000 taken by ControlCe (Apple)

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Add debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use('/api', introRoutes); // Updated to mount at /api
const MONGO_URI = process.env.MONGO_URI 
if (!MONGO_URI) { throw new Error('MONGO_URI environment variable not set'); }

// establish connection to MongoDB database
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
