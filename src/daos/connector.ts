import { MongoClient, ServerApiVersion, } from 'mongodb';
const uri = process.env.MONGODB_URL ?? 'whatever_string_it_will_crash';

console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
  serverSelectionTimeoutMS: 5000
},
);

client.connect();

export default client;

