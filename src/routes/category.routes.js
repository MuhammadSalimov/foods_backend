const {Router} =require("express")
const categoryController = require("../controllers/category.controller")
const categoryRouter = Router()

const route = '/category'

categoryRouter.get(`${route}` , categoryController.categoryAll)
categoryRouter.post(`${route}` , categoryController.create)
categoryRouter.put(`${route}/:id` , categoryController.update)
categoryRouter.get(`${route}/:id` , categoryController.delete)

module.exports = categoryRouter