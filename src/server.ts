import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import domainRoutes from './routes/domains';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Make sure to parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// ✅ Add root route
app.get('/', (req, res) => {
  res.send('API is working 🚀');
});

// Your domain routes
app.use('/api/domains', domainRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
