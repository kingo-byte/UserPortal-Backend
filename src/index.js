import { insertUser, getUsers, deleteUser, updateUser } from './users.js'; 
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

config();

const app = express();

app.use(express.json());

//trigger pipeLine
const corsOptions = {
    origin: 'https://kingo-byte.github.io', // Allow only this origin
    methods: ['GET', 'POST', 'DELETE', 'PATCH'], // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200 // Some legacy browsers choke on status 204
};

app.use(cors(corsOptions));

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
    
    return res.status(201).json({ message: "User created successfully" });
});

app.delete("/api/users/:id", async (req, res) => {
    const id = req.params.id;
    await deleteUser(id);
    return res.status(200).json({ message: "User deleted successfully" });
});

app.patch("/api/users", async (req, res) => {
    const user = req.body;
    await updateUser(user);
    return res.status(200).json({ message: "User updated successfully" });
});

