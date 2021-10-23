const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

//Consultar  todos los usuarios
module.exports.getProducts= async (req, res, next) => {
    try{
        const products = await prisma.products.findMany({
            include:{category: true}
        })
        res.json(products);
    }catch(error){
        next(error)
    }
    
}