const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//Consultar  todos los productos
module.exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await prisma.products.findMany({
            include: { category: true }
        });
        res.json(products);
    } catch (error) {
        next(error);
    }

}

// Añadir nuevo producto a la base de datos
module.exports.createProduct = async (req, res, next) => {
    try {
        const { name, price, categoryId } = req.body

        const category = await prisma.category.findUnique({
            where: {
                id: categoryId
            }
        })
        const product = await prisma.products.create({
            data: {
                name: name,
                price: price,
                category: {
                    connect: {
                        id: categoryId,
                    },
                },
                stock: 0,
                purchaseQuantity: {

                },
            }
        })
        res.json(product);
    } catch (error) {
        next(error);
    }

}

//Se agrega el valor recibido al stock del producto
module.exports.addProductStock = async (req, res, next) => {
    try {
        const { id, quantity } = req.params;
        const product = await prisma.products.findUnique({
            where: { id: Number(id) },
              })
        const finalStock= product.stock+Number(quantity)
        if (finalStock< 0) {
            res.status(400).send("No se pudo realizar la operación debido a que la cantidad solicitada a remover del stock fue mayor a la existente. ¡No puede haber stock negativo!.")
        } else {
            const product = await prisma.products.update({
                where: {
                    id: Number(id)
                },
                data: {
                    stock: finalStock
                },
                include: {
                    category: true
                },
            })
            res.json(product)
        }

    } catch (error) {
        next(error);
    }

}


//Consultar producto con ID especificado
module.exports.getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const foundProduct = await prisma.products.findUnique({
            where: {
                id: Number(id),
            },
            include: { category: true }
        })
        res.json(foundProduct);
    } catch (error) {
        next(error);
    }
}

//Eliminar un producto con ID especificado
module.exports.deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduct = await prisma.products.delete({
            where: {
                id: Number(id),
            }
        })
        res.json(deletedProduct);
    } catch (error) {
        next(error);
    }
}

//Modificar producto con ID especificado y con los parámetros mencionados dentro del body
module.exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await prisma.products.update({
            where: {
                id: Number(id)
            },
            data: req.body,
            include: {
                category: true
            },
        })
        res.json(product)
    } catch (error) {
        next(error);
    }

}
