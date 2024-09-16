import connectToDb from './repository.js'   

export async function insertUser(user) 
{
    const uri = process.env.USERPORTAL_DB_URI;
    const mongoClient = await connectToDb(uri);

    const usersCollection = mongoClient.db().collection('Users');
    const result = await usersCollection.insertOne(user);

    console.log('this is the result', result);    

    mongoClient.close();
}

export async function getUsers()
{
    try {
        const uri = process.env.USERPORTAL_DB_URI;
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
    const uri = process.env.USERPORTAL_DB_URI;
    const mongoClient = await connectToDb(uri);    
    const usersCollection = mongoClient.db().collection('Users');
    const result = await usersCollection.deleteOne({_id: id});
    console.log('this is the result', result);

    mongoClient.close();
}

export async function  updateUser(params) {
    const uri = process.env.USERPORTAL_DB_URI;  
    const mongoClient = await connectToDb(uri); 

    const usersCollection = mongoClient.db().collection('Users');

    const result = await usersCollection.updateOne({_id: params._id}, {$set: params});

    mongoClient.close();

    console.log('this is the result', result);
}
