import mongoose from "mongoose";

// Configurando o Mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/bancoTeste").then(() => {
  console.log("MongoDB Conectado...")
}).catch(() => {
  console.log("Houve um erro ao se conectar ao MongoDb: "+ erro)
})

// Model - usuarios

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },

    sobrenome: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    idade: {
        type: Number,
        require: true
    },

    pais: {
        type: String,
        require: false
    }

})

// Definindo o Model 
mongoose.model('Usuarios', UsuarioSchema)

// Inserindo dados na Collection

const addUsuario = mongoose.model('Usuarios')

new addUsuario({
    nome: "Fernando",
    sobrenome: "Aymar",
    email: "email@hotmail.com",
    idade: 30,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuario cadastrado com sucesso!")
}).catch((erro) => {
    console.log("Houve um erro ao registrar um usuario: "+ erro)
})



