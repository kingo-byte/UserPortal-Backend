import { config } from 'dotenv';
import { insertUser, getUsers, deleteUser, updateUser } from './users.js';
import { addCollection } from './repository.js';   
import { v4 as uuidv4 } from 'uuid';

config();

const uri = process.env.USERPORTAL_DB_URI;

//------- this is how you can insert a user -------
// let user = 
// {
//     "_id": uuidv4(),   
//     "username": "Mohammad",
//     "password": "12345",
// }
// await insertUser(user);


//------- this is how you can get users -------
// let users = await getUsers();   
// console.table(users);


//------- this is how you can delete a user -------
//await deleteUser('6f8a34b3-c95f-40f3-ab74-2b596e6a1f84'); 


//------- this is how you can update a user -------
await updateUser({_id: '5719d484-a45a-478c-b333-a68f22c9ebe9', username: 'Rony', password: 'newest password'});       

