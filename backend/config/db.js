import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const connectDB = async () => {
  let uri = process.env.MONGO_URI;
  
  try {
    // If no URI or local URI, use memory server immediately
    if (!uri || uri === 'mongodb://127.0.0.1:27017/react-learning-platform') {
      console.log('No Atlas URI provided. Using MongoDB Memory Server...');
      const mongoServer = await MongoMemoryServer.create();
      uri = mongoServer.getUri();
    }

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Atlas Connection Error: ${error.message}`);
    console.log('Falling back to MongoDB Memory Server so you can test the app...');
    
    try {
      const mongoServer = await MongoMemoryServer.create();
      const fallbackUri = mongoServer.getUri();
      const conn = await mongoose.connect(fallbackUri);
      console.log(`Fallback MongoDB Connected: ${conn.connection.host}`);
    } catch (fallbackErr) {
      console.error(`Fallback Error: ${fallbackErr.message}`);
      process.exit(1);
    }
  }
};

export default connectDB;
