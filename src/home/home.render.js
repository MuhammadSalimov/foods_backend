const categoryService = require("../service/category.service");
const foodService = require("../service/food.service");




const homeRender = async (req, res) => {
  try {
    const category = await categoryService.getAll();
    const foods = await foodService.getAll()
    res.render("index.ejs", { category , foods });
  } catch (error) {
    console.log(error);
  }
};

module.exports = homeRender;
