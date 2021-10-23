import express from 'express';

const router= express.Router();

const users= [
    {
        firstName: "Juanito",
        lastName: "Perez",
        age: 20    
    },
    {
        firstName: "Laura",
        lastName: "Rodriguez",
        age: 20    
    }
];

router.get('/',(req, res) =>{
    res.send(users);
});

router.post();

export default router;