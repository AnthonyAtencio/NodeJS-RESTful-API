const uuidv4= require('uuid').v4;


let users = [];


//Consultar  todos los usuarios
module.exports.getUsers= (req, res) => {
    res.send(users);
}

//Consultar usuario con ID especificado
module.exports.getUser =  (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    console.log(foundUser);
    res.send(foundUser);
}

// Añadir nuevo usuario a la base de datos
module.exports.createUser= (req, res) => {
    const newUser = req.body;
    users.push({ ...newUser, id: uuidv4() }); // se crea id único para el nuevo usuario
    res.send(`The user ${newUser.firstName} has been added to the database.`);
}

//Borrar usuario con ID especificado
module.exports.deleteUser= (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`The user with ID ${id} has been deleted from the database.`);
}

//Modificar usuario con ID especificado y con los parámetros mencionados dentro del body
module.exports.updateUser= (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);
    // Modificar cada uno de los parámetros en caso de que hayan sido recibidos
    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;
    res.send(`The user with id: ${id} has been updated.`)
    }