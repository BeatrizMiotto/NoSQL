const app = require('./src/config/server')
const connection = require('./src/config/connection')
const comentarios = require('./src/models/comentarios')

app.get("/", async (req,res)=>{
    const resultado = await comentarios.find()
    res.json(resultado)
})

app.post("/", async(req,res)=>{
    const {nome, msg, data} = req.body

    let resultado = await comentarios.create({nome, msg, data})

    res.json(resultado)
})


