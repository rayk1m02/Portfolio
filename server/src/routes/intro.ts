import express from 'express';
import Intro from '../models/Intro';

const router = express.Router();

// Route will be accessed at /api/intro
router.get('/intro', async (req, res) => {

  try {
    const intro = await Intro.findOne();
    
    if (intro) { 
      console.log('Found intro data. Sending to client', intro);
      res.json(intro); 
    } else { 
      res.status(404);
    }

  } catch (error) { 
    console.error('Database error:', error);
    res.status(500); 
  }

});

export default router;