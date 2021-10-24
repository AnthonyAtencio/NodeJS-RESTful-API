# Backend API

Esta es una **REST API** desarrollada con el framework **Express** de **Node.js** para manejar un sistema de información alojado en una base de datos local con el engine **SQLite**. Desde la API se hace uso de **Prisma Cliente** para realizar los queries a la base de datos:

- Usuarios
- Productos
- Categorías
- Historial de compras



## Testing



- Ejecutar el siguiente comando para inicializar el API

`npm start`

- Realizar las operaciones CURD hacia la siguiente URL:

`http://localhost:3000`

- En la base de datos se tiene ya registrado algunas entradas para cada una de las tablas.



## Estructura de la base de datos

A continuación se describe los campos y el tipo de entrada para cada base de datos junto a un ejemplo.

Nota: 

> Los campos con * se generan automáticamente al no ser especificado un valor.
>
> Los campos con ? deben ser únicos en la base de datos. No puede haber duplicados.

### Usuarios

| **NOMBRE** | **TIPO** |
| ---------- | -------- |
| *id        | Int      |
| name       | String   |
| lastName   | String   |
| age        | Int      |
| tel        | Int      |
| ?email     | String   |
| *createdAt | DateTime |

Ejemplo:

```json
  {
​    "id": 2,
​    "name": "Maria",
​    "lastName": "Lopez",
​    "age": 25,
​    "tel": 8888888,
​    "email": "correo2@domain.com",
​    "createdAt": "2021-10-23T22:55:46.260Z"
  }
```

### Productos

| **NOMBRE**  | **TIPO** |
| ----------- | -------- |
| *id         | Int      |
| ?name       | String   |
| *price      | Int      |
| *createdAt  | DateTime |
| *categoryId | Int      |
| *stock      | Int      |

### Categorias

| **NOMBRE** | **TIPO** |
| ---------- | -------- |
| id         | Int      |
| ?name      | String   |

Ejemplo:

```json
    {
        "id": 2,
        "name": "enlatados"
    }
```



### Historial de compras 

| **NOMBRE**      | **TIPO** |
| --------------- | -------- |
| *id             | Int      |
| userId          | Int      |
| productId       | Int      |
| *categoryId Int | Int      |
| *quantity       | Int      |

Ejemplo:

```json
    {
        "id": 2,
        "userId": 4,
        "productId": 2,
        "categoryId": 3,
        "quantity": 15
    }
```

## Funciones del API

### Usuarios

Las funciones que se disponen para la base de datos de `Usuarios` son las siguientes

- Consultar el registro de todos los usuarios. Como respuesta se obtiene un objeto `JSON` con la información.

```http
GET http://<server name>/users
```
- Consultar la entrada de un usario en especifico. El `{id}` en el PATH corresponde al ID del usuario a consultar. Se recibe como respuesta un objeto `JSON` con la información de la entrada eliminada

```http
GET http://<server name>/users/{id}
```


- Solicitar la creación de una nueva entrada en la base de datos.

```http
POST http://<server name>/users
```

Se debe se adjuntar un objeto `JSON` al body de la solicitud donde se debe minimo especificar los siguientes campos:

```json
    {
        "name": "name",
        "lastName": "lastName",
        "age": 0,
        "tel": 0,
        "email": "email@domain.com"
    }
```

- Eliminar entrada de un usuario en la base de datos. El `{id}` en el PATH corresponde al ID del usuario a eliminar. Se recibe como respuesta un objeto `JSON` con la información de la entrada eliminada


```http
DELETE http://<server name>/users/{id}
```
- Realizar una modificación parcial o completa de una entrada de un usuario en la base de datos. El `id` en el PATH corresponde al ID del usuario a consultar.

```http
PATH http://<server name>/users
```
Se debe se adjuntar un objeto `JSON` al body de la solicitud donde se debe minimo especificar alguno de los siguientes campos:

```json
    {
        "id": 6,
        "name": "Francisco",
        "lastName": "Polaina",
        "age": 18,
        "tel": 678678458,
        "email": "correo442@domain.com",
        "createdAt": "2021-10-24T12:03:05.481Z"
    }
```

### Productos

- Consultar el registro de todos los productos. Como respuesta se obtiene un objeto `JSON` con la información.

```http
GET http://<server name>/products
```
- Consultar la entrada de un producto en especifico. El `{id}` en el PATH corresponde al ID del producto a consultar. Se recibe como respuesta un objeto `JSON` con la información de la entrada eliminada

```http
GET http://<server name>/products/{id}
```

- Solicitar la creación de una nueva entrada en la base de datos.

```http
POST http://<server name>/products
```
Se debe se adjuntar un objeto `JSON` al body de la solicitud donde se debe minimo especificar los siguientes campos:

```json
    {
        "name": "Televisor",
        "price": 6500000,
        "categoryId": 3
    }
```

Nota: El producto se creará con un stock en inventario igual a cero `0`. Para cambiar el valor se debe usar la funcion descrita a continuación.

- Añadir o remover una `{cantidad}` especifica de la unidades que hay del producto  con `{id}` indicado en el PATH. Para remover unidades del producto el valor número en `{cantidad}` debe ser negativo, en caso de que la cantidad especificada sea mayor la disponibilidad del producto, se recibirá un mensaje de error 400 indicando lo mismo.  Se obtiene como respuesta un objeto `JSON` con la información de la entrada modificada.

  ```http
  PATH http://<server name>/products/{id}/{cantidad}
  ```

- Eliminar entrada de un producto en la base de datos. El `{id}` en el PATH corresponde al ID del producto a eliminar. Se recibe como respuesta un objeto `JSON` con la información de la entrada eliminada

```http
DELETE http://<server name>/products/{id}
```

- Realizar una modificación parcial o completa de una entrada de un producto en la base de datos. El `id` en el PATH corresponde al ID del usuario a consultar.

```http
PATH http://<server name>/products
```

Se debe se adjuntar un objeto `JSON` al body de la solicitud donde se debe minimo especificar alguno de los siguientes campos:

```json
    {
        "id": 6,
        "name": "Francisco",
        "lastName": "Polaina",
        "age": 18,
        "tel": 678678458,
        "email": "correo442@domain.com",
        "createdAt": "2021-10-24T12:03:05.481Z"
    }
```

-

```http
GET http://<server name>/users
```

-

```http
GET http://<server name>/users
```
-

```http
GET http://<server name>/users
```





