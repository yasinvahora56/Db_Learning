const express = require('express')
const { creat, getAll, getOne, Update, deleteUser} = require('../Controller/UserController.js')

const route = express.Router()

route.post("/creat", creat)
route.get("/getAll", getAll)
route.get("/getOne/:id", getOne)
route.put("/Update/:id", Update)
route.delete("/deleteUser/:id", deleteUser)


module.exports = route