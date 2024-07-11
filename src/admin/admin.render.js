const categoryService = require("../service/category.service");
const foodService = require("../service/food.service");
const { sign, verify } = require("jsonwebtoken");

const adminRender = async (req, res) => {
  const foods = await foodService.getAll();
  const category = await categoryService.getAll();
  let { access_token } = req.cookies;
  try {
    const decoded = await verify(access_token, process.env.KEY_TOKEN);
    if (
      decoded.username == process.env.admin_name &&
      decoded.password == process.env.password
    ) {
      return res.render("admin.ejs", { foods, category });
    } else {
      const { username, password } = req.body;
      if (
        username == process.env.admin_name &&
        password == process.env.password
      ) {
        const token = await sign(req.body, process.env.KEY_TOKEN);
        res.cookie("access_token", token, { httpOnly: true });
        return res.render("admin.ejs", { foods, category });
      }
    }
    res.render("login.ejs");
  } catch (error) {
    console.log(error);
  }
};

module.exports = adminRender;
