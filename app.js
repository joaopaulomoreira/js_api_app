const express = require('express')
const mongoose = require('mongoose')

require('./models/home')
const Home = mongoose.model('Home')

const app = express()
const port = 8000

app.use(express.json())
mongoose.connect('mongodb://localhost:27017/api_app', {
  useNewUrlParser: true, 
  useUnifiedTopology: true}).then(() => {

    console.log("Conexão ao banco realizada com sucesso")

  } ).catch(() => {

    console.log("Erro: conexão ao banco falhou")

  })

app.get('/', (req, res) => {
  res.json({name: "Joao"})
})

app.post('/home', async(req, res) => {
  Home.create(req.body, (err) => {
    if(err) return res.status(400).json({
      error:true,
      message:"Erro"
    })
  })
  
  return res.json({
    error:false,
      message:"Cadastrado com sucesso"
  
  })
})

app.listen(port, () => {
  console.log(`Servidor iniciado http://localhost:${port}`)
})