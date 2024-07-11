const foodsRouter = require("./foods.routes")
const categoryRouter = require("./category.routes")
const adminRouter = require("./admin.routes")

module.exports = [
  foodsRouter,
  categoryRouter,
  adminRouter
]