import express from 'express';

import usersRouter from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users',usersRouter);

app.get('/',(req, res)=>{
    res.send('Hello from homepage');
});
app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));