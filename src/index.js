import { insertUser, getUsers, deleteUser, updateUser } from './users.js'; 
import { v4 as uuidv4 } from 'uuid';
import express, { application } from 'express';
import { config } from 'dotenv';
 
config();

const app = express();
app.use(express.json());

//use cors to allow any


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
    await insertUser(user);

    return res.sendStatus(200);
});

app.delete("/api/users/:id", async (req, res) => {
    const id = req.params.id;
    await deleteUser(id);
    return res.sendStatus(200);
});

app.patch("/api/users", async (req, res) => {
    const user = req.body;
    await updateUser(user);
    return res.sendStatus(200);
})
  

