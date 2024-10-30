// Request handling
import express from 'express';
import Intro from '../models/Intro';

const router = express.Router();

// Route to get intro data
router.get('/intro', async (req, res) => {
  try {
    // Attempt to find intro data in the database
    const intro = await Intro.findOne();
    if (intro) { 
      console.log('Retrieved intro data from database');
      res.json(intro); 
    } 
    else { res.status(404).json({ message: 'Intro data not found' });}
  } catch (error) { 
    res.status(500).json({ message: 'Internal server error' }); 
  }
});

export default router;

