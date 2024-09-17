import { insertUser, getUsers, deleteUser, updateUser } from './users.js'; 
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send ("Welcome to User Portal Backend");    
});

app.listen(process.env.PORT);

console.log('listening on port:', process.env.PORT);  

app.get("/api/users", async (req, res) => {
    const result = await getUsers();
    
    return res.json(result);
});
app.post("/api/users", async (req, res) => {
    const user = req.body;
    user._id = uuidv4();
    await insertUser(user);

    return JSON.parse("Ok");
});

app.delete("/api/users/:id", async (req, res) => {
    const id = req.params.id;
    await deleteUser(id);
    return JSON.parse("Ok");
});

app.patch("/api/users", async (req, res) => {
    const user = req.body;
    await updateUser(user);
    return JSON.parse("Ok");
})
  

