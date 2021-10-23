const  express = require('express');
//import {PrismaClient} from '@prisma/client'
const {getUsers, getUser, createUser,
    deleteUser,updateUser} = require('../controllers/users.js');

//const prisma = new PrismaClient
const router = express.Router();

router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

module.exports= router;