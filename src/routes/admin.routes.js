const {Router} =require("express")
const adminRender = require("../admin/admin.render")
const foodsRouter = Router()

const route = '/admin'

foodsRouter.get(`${route}` , adminRender)
foodsRouter.post(`${route}` , adminRender)


module.exports = foodsRouter