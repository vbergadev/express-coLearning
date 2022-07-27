const express = require('express');

const app = express();
const routes = require('./src/routes/routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')


// CRUD - Create - READ - UPDATE - DELETE
//        POST   - GET  - PUT - DELETE
// Base URL - http://www.meusite.com.br - params - query - body

app.post("/", function (req, res) {
  console.log(req.body)
  res.send(req.body.nome)
})

app.get("/params/:product", (req, res) => {
  console.log(req.params)
  res.send(req.params.product)
})
app.get("/queryString", (req, res) => { ///queryString/?campanha=natal2022&produtos=eletronicos
  console.log(req.query)
  res.send(req.query.campanha)
})
app.listen(3003, () => {
  console.log('O pai ta ON');
  console.log('o app ta rodando na http://localhost:3003')
});
