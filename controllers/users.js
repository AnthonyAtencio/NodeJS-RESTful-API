const uuidv4= require('uuid').v4;
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
let users = [];


//Consultar  todos los usuarios
module.exports.getUsers= async (req, res, next) => {
    try{
        const products = await prisma.products.findMany({
            include:{category: true}
        })
        res.json(products);
    }catch(error){
        next(error)
    }
    
}

//Consultar usuario con ID especificado
module.exports.getUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        const foundUser = users.find((user) => user.id === id);
        console.log(foundUser);
        res.send(foundUser);
    }catch(error){
        next(error);
    }    

}

// Añadir nuevo usuario a la base de datos
module.exports.createUser= async (req, res, next) => {
    const newUser = req.body;
    users.push({ ...newUser, id: uuidv4() }); // se crea id único para el nuevo usuario
    res.send(`The user ${newUser.firstName} has been added to the database.`);
}

//Borrar usuario con ID especificado
module.exports.deleteUser= async (req, res, next) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`The user with ID ${id} has been deleted from the database.`);
}

//Modificar usuario con ID especificado y con los parámetros mencionados dentro del body
module.exports.updateUser= async (req, res, next) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);
    // Modificar cada uno de los parámetros en caso de que hayan sido recibidos
    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;
    res.send(`The user with id: ${id} has been updated.`)
    }