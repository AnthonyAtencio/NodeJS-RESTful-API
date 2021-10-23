const  express = require('express');
const usersRouter  = require('./routes/users.js');

const app = express();
const PORT = 3000;

// Colocando express.json and .urlencoded como función middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/users',usersRouter);
app.use('/products',usersRouter);

// Homepage
app.get('/',async (req, res, next)=>{
    res.send('Hello from homepage');
});

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));