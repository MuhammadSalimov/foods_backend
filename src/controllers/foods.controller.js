const { deleteOne } = require("../model/foods.model");
const foodService = require("../service/food.service");

class FoodsController {
  async foodAll(req, res) {
    const foods = await foodService.getAll();
    res.json({ message: "ok", data: foods });
  }

  async create(req, res) {
    try {
      const { title, price, photo, description, category } = req.body;
      const food = await foodService.create({
        title, price, photo, description, category
      });
      res.status(200).redirect('/api/admin')   
    } catch (error) {
      console.log(error);
    }
  }

  async update (req, res){
    const {id} =req.params
    const data  = await foodService.update(id, req.body)
    res.json({data})
  }

  async delete (req, res){
    let {id} =req.params
    id= id.split("?")[0]
    const data  = await foodService.delete(id)
    if(data) return res.redirect("/api/admin")
  }
}

module.exports = new FoodsController();
