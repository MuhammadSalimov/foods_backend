const foodModel = require("../model/foods.model");

class FoodService {

  async getAll() {
    const Food = await foodModel.find({isActive:true}).populate("category");
    return Food;
  }

  async create(body) {
    const Food = await foodModel.create(body);
    return Food;
  }

  async update(id , body) {
    const Food = await foodModel.findByIdAndUpdate(id, body , {new:true});
    return Food
  }

  async delete(id) {
    const Food = await foodModel.findByIdAndUpdate(id, {
      isActive:false
    });
    return Food
  }
}

module.exports = new FoodService();
