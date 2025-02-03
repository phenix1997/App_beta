import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://belhachemiamohammed:<db_password>@cluster0.h1gxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('librisconnecti');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export async function closeDatabaseConnection() {
  await client.close();
  console.log('Disconnected from MongoDB');
}