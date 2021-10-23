const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
let users = [];


//Consultar  todos los usuarios
module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await prisma.users.findMany({})
        res.json(users)
    } catch (error) {
        next(error)
    }

}

//Consultar usuario con ID especificado
module.exports.getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const foundUser = await prisma.users.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(foundUser);
    } catch (error) {
        next(error);
    }

}

// Añadir nuevo usuario a la base de datos
module.exports.createUser = async (req, res, next) => {
    try {
        const newUser = await prisma.users.create({
            data: req.body
        })
        res.json(newUser)

    } catch (error) {
        next(error);
    }

}

//Borrar usuario con ID especificado
module.exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await prisma.users.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(deletedUser);
    } catch (error) {
        next(error);
    }
}

//Modificar usuario con ID especificado y con los parámetros mencionados dentro del body
module.exports.updateUser = async (req, res, next) => {
    try{const data=req.body;
        const id=req.params.id;
        const updatedUser= await prisma.users.update({
            where: {
                id: Number(id)
            },
            data:data
        })
        res.json(updatedUser);
    }catch(error){
        next(error);}  
}