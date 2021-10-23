const  express = require('express');

const {getAllUsers, getUser, createUser,
    deleteUser,updateUser} = require('../controllers/users.js');


const router = express.Router();

router.get('/',getAllUsers);

router.post('/',createUser);

router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

module.exports= router;