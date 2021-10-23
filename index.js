import express from 'express'


const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/',(req, res)=>{
    res.send('Hello from homepage')
})
app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`)) 

// http://localhost:3000