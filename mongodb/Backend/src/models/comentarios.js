const {Schema, model} = require('mongoose')
const comentariosSchema = new Schema({
    nome: {
        type: String
    },
    msg: {
        type: String
    },
    data:{
        type: Date,
        default: new Date()
    }

})
const modelo = model("comentarios", comentariosSchema)
module.exports = modelo
