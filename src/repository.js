import { MongoClient } from 'mongodb';

export default async function connectToDb(uri) 
{
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log("connection to mongo db succeeded");
        return client;
    } catch (error) {
        console.error("connection to mongo db failed");
    }
}


export async function addCollection(collection, uri)    
{
    try {
        const client = await connectToDb(uri);
        const db = client.db(); 
        await db.createCollection(collection);    
        client.close();    
    } catch (error) {
      console.error("Connection to mongo db failed ");_   
    }
}