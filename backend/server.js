import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import moduleRoutes from './routes/moduleRoutes.js';

import Module from './models/Module.js';
import { modules } from './seeder.js';

dotenv.config();

connectDB().then(async () => {
  const count = await Module.countDocuments();
  if (count === 0) {
    console.log('Seeding initial modules...');
    await Module.insertMany(modules);
    console.log('Modules seeded!');
  }
});

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
