import { MongoClient } from 'mongodb';

const dbusername = process.env.mongodb_username;
const dbpassword = process.env.mongodb_password;
const dbconnection = '@cluster0.ewevp.mongodb.net/';
const dbname = 'nextAuth';
const dbprefix = 'mongodb+srv://';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `${dbprefix}${dbusername}:${dbpassword}${dbconnection}${dbname}`
  );

  return client;
}
