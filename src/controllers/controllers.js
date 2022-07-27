const controllers = {
  home: (req, res) => {
    res.render('index')
  },
  form: function (req, res) {
    console.log(req.body)
    res.send(req.body.nome)
  }
}
module.exports = controllers

// const home = (req, res) => {
//   res.render('index')
// }
// const form = (req, res) => {
//   res.send(req.body)
// }

// module.exports = {
//   home,
//   form
// }