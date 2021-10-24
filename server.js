const express = require('express');
const usersRouter = require('./routes/users.js');
const productsRouter = require('./routes/products.js');
const categoriesRouter = require('./routes/categories.js');
const functionsRouter = require('./routes/functions.js');
const purchasesRouter = require('./routes/purchases.js');

const app = express();
const PORT = 3000;

// Colocando express.json and .urlencoded como función middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/purchases', purchasesRouter);
app.use('/functions', functionsRouter);


// Homepage
app.get('/', async (req, res, next) => {
    res.send('Hello from homepage');
});

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));