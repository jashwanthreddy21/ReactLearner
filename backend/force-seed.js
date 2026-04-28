import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Module from './models/Module.js';
import User from './models/User.js';
import connectDB from './config/db.js';
import { modules } from './seeder.js';

dotenv.config();

const forceSeed = async () => {
  try {
    await connectDB();
    await Module.deleteMany({});
    await User.deleteMany({});
    
    await Module.insertMany(modules);
    
    console.log(`Force seeded ${modules.length} modules successfully!`);
    process.exit();
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
};

forceSeed();
