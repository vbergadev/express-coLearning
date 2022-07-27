const express = require("express");

const routes = express.Router();

const controllers = require('../controllers/controllers')
// const {home, form} = require('../controllers/controllers')

routes.get("/", controllers.home)
routes.post("/", controllers.form)

module.exports = routes