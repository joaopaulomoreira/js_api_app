const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World App API Imersao!')
})

app.listen(port, () => {
  console.log(`Servidor iniciado http://localhost:${port}`)
})