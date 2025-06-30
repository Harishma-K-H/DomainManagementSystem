import express from 'express';
import domainRoutes from './routes/domain.routes'; // ✅ Make sure this exports a Router

const app = express();

app.use(express.json());
app.use('/api/domains', domainRoutes); // ✅ Make sure domainRoutes is a router

export default app;