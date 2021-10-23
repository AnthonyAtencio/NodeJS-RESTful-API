import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const newUser = req.body;
    users.push({ ...newUser, id: uuidv4() });
    res.send(`The user ${newUser.firstName} has been added to the database.`);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const foundUser=users.find((user) => user.id === id);
    console.log(foundUser);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    users=users.filter((user)=>user.id !==id);
    res.send(`The user with ID ${id} has been deleted from the database.`);
});

export default router;