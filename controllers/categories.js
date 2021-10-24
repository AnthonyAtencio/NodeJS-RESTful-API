const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//Consultar  todas las categorias
module.exports.getAllCategories = async (req, res, next) => {
    try {
        const categories = await prisma.category.findMany({
        });
        res.json(categories);
    } catch (error) {
        next(error);
    }
}

// Añadir nueva categoria  a la base de datos
module.exports.createCategory = async (req, res, next) => {
    try {
        const category = await prisma.category.create({
            data: req.body
        })
        res.json(category);
    } catch (error) {
        next(error);
    }

}


//Consultar categoria con ID especificado
module.exports.getCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const foundcategory = await prisma.category.findUnique({
            where: {
                id: Number(id),
            }
        })
        res.json(foundcategory);
    } catch (error) {
        next(error);
    }
}

//Eliminar un categoria con ID especificado,
//esto elimina tambien todos los productos y registros de compras asociados a la categoria
module.exports.deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedCategory = await prisma.category.delete({
            where: {
                id: Number(id),
            }
        })
        res.json(deletedCategory);
    } catch (error) {
        next(error);
    }
}


//Modificar producto con ID especificado y con los parámetros mencionados dentro del body
module.exports.updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body
        const category = await prisma.category.update({
            where: {
                id: Number(id)
            },
            data: data
        })
        res.json(category)
    } catch (error) {
        next(error);
    }

}