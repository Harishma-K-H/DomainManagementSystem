import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import domainRoutes from './routes/domains'; // correct path

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// Make sure this matches your route
app.use('/api/domains', domainRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
