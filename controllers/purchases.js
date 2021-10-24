const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Función para obtener todo el historial de compras
module.exports.getAllPurchases = async (req, res, next) => {
    try {
        const purchases = await prisma.purchaseHistory.findMany({})
        res.json(purchases)
    } catch (error) {
        next(error);
    }
}


// Función para obtener todo el historial de compras
module.exports.getPurchase = async (req, res, next) => {
    try {
        const { id } = req.params
        const purchase = await prisma.purchaseHistory.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(purchase)
    } catch (error) {
        next(error);
    }
}

// Añadir entrada de compra a la base de datos. Esta función a diferencia de "../function/buy" no realiza el proceso de validar y reducir el stock del producto en inventario
module.exports.createPurchase = async (req, res, next) => {
    try {
        const { userId, productId, quantity } = req.body
        const { categoryId } = await prisma.products.findUnique({
            where: {
                id: productId
            }
        })
        const purchase = await prisma.purchaseHistory.create({
            data: {
                user: {
                    connect: {
                        id: userId,
                    },
                },
                product: {
                    connect: {
                        id: productId,
                    },
                },
                categoryId: categoryId,
                quantity: quantity,
            }
        })

        res.json(purchase);


    } catch (error) {
        next(error)
    }

}

//Borrar entrada del historial de compras con ID especificado
module.exports.deletePurchase = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPurchase = await prisma.purchaseHistory.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(deletedPurchase);
    } catch (error) {
        next(error);
    }
}

//Modificar entrada del historial de compras con ID especificado y con los parámetros mencionados dentro del body
module.exports.updatePurchase = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { userId,productId, quantity } = req.body
        const { categoryId } = await prisma.products.findUnique({
            where: {
                id: productId
            }
        })
        const updatedPurchase = await prisma.purchaseHistory.update({
            where: {
                id: Number(id)
            },
            data: {
                user: {
                    connect: {
                        id: userId,
                    },
                },
                product: {
                    connect: {
                        id: productId,
                    },
                },
                categoryId: categoryId,
                quantity: quantity,
            }
        })
        res.json(updatedPurchase);
    } catch (error) {
        next(error);
    }
}