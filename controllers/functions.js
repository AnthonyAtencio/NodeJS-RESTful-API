const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Función para comprar producto y registrar la compra en la base de datos
module.exports.buyProduct = async (req, res, next) => {
    // Esta funcion obtiene un objeto JSON que debe contener el id del producto a comprar, la cantidad y el usuario que realiza la compra
    // Ejemplo
    // {
    //     "userId": 1,
    //     "productId":1,
    //     "quantity":1
    // }
    try {
        const { userId, productId, quantity } = req.body // Capturar la información de compra
        // Validar existencia de stock en la base de datos
        const stockAny = await prisma.products.findUnique({
            where: {
                id: Number(productId)
            }
        })
        const stock = stockAny.stock // Cantidad del producto en inventario
        if (stock >= quantity) {
            // Obtener el cateroryId del producto solicitado
            const {categoryId} = await prisma.products.findUnique({
                where: {
                    id: productId
                }
            })
            // Registrar compra en la base de datos
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
                  quantity: 1,
                }
              })
            const remainingStock=stock-quantity // Cantidad del producto restante luego de la compra
            // Registrar reducción del stock en la base de datos
            await prisma.products.update({
                where: {
                    id:productId
                },
                data:{
                    stock:remainingStock
                }
            })
            res.json(purchase);
        }
        else {
            res.status(400).send("No hay stock disponible del producto");
        }



        // Enviar mensaje de compra realizada
    } catch (error) {
        next(error)
    }

}