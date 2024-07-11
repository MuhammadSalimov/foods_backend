const {Router} =require("express")
const foodsController = require("../controllers/foods.controller")
const foodsRouter = Router()

const route = '/food'

foodsRouter.get(`${route}` , foodsController.foodAll)
foodsRouter.post(`${route}` , foodsController.create)
foodsRouter.put(`${route}/:id` , foodsController.update)
foodsRouter.get(`${route}/:id` , foodsController.delete)

module.exports = foodsRouter