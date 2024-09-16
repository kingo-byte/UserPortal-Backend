import connectToDb from './repository.js'
import { config } from 'dotenv';

config();

const uri = process.env.USERPORTAL_DB_URI;

export async function insertUser(user) 
{
    try 
    {
        const mongoClient = await connectToDb(uri);

        const usersCollection = mongoClient.db().collection('Users');
        const result = await usersCollection.insertOne(user);

        console.log('this is the result', result);    

        mongoClient.close();
    } catch (error) {
      console.error(error);
    }
}

export async function getUsers()
{
    try {
        const mongoClient = await connectToDb(uri); 

        const usersCollection = mongoClient.db().collection('Users');
        const users = await usersCollection.find({}).toArray();
    
        mongoClient.close();
        
        return users;   
    } catch (error) {
        console.error(error);
    }
}

export async function deleteUser(id)
{
    try {
        const mongoClient = await connectToDb(uri);    
        const usersCollection = mongoClient.db().collection('Users');
        const result = await usersCollection.deleteOne({_id: id});
        console.log('this is the result', result);
    
        mongoClient.close();
    } catch (error) {
        console.error(error);   
    }

}

export async function  updateUser(params) {
    try 
    {
        const mongoClient = await connectToDb(uri); 

        const usersCollection = mongoClient.db().collection('Users');
    
        const result = await usersCollection.updateOne({_id: params._id}, {$set: params});
    
        mongoClient.close();
    
        console.log('this is the result', result);
    } catch (error) {
        console.error(error);
    }
}
