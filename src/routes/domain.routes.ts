import express, { Request, Response } from 'express';
import Domain from '../models/Domain';
import { fetchResellerDomains } from '../utils/fetchResellerDomains';

const router = express.Router();

router.get('/import', async (_req: Request, res: Response): Promise<void> => {
  try {
    const domains = await fetchResellerDomains();

    if (!domains.length) {
      res.status(500).json({ error: 'Failed to fetch domain data' });
      return;
    }

    await Domain.insertMany(domains, { ordered: false });
    res.json({ message: 'Domains imported successfully', count: domains.length });
  } catch (error) {
    console.error('❌ Insert error:', error);
    res.status(500).json({ error: 'Database insert failed' });
  }
});

export default router; // ✅ this is a router, not a handler function
