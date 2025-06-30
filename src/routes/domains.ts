import express from 'express';
import axios from 'axios';
import Domain from '../models/Domain';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.get('/fetch', async (req, res) => {
  try {
    const { RESELLER_USERID, RESELLER_API_KEY } = process.env;

    const response = await axios.get('https://httpapi.com/api/domains/search.json', {
      params: {
        'auth-userid': RESELLER_USERID,
        'api-key': RESELLER_API_KEY,
        'no-of-records': 10,
        'page-no': 1
      }
    });

    const domains = response.data.domains;

    // Save to MongoDB
    for (const domain of domains) {
      await Domain.findOneAndUpdate(
        { entityid: domain.entityid },
        domain,
        { upsert: true }
      );
    }

    res.status(200).json({ message: 'Domains fetched and saved', count: domains.length });
  } catch (error) {
    console.error('Error fetching domains:', error);
    res.status(500).json({ error: 'Failed to fetch domains' });
  }
});

export default router;
