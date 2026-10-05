import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://portfolio-mongo:27017/nextAuth';

export async function connectToDatabase() {
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });

  return client;
}
