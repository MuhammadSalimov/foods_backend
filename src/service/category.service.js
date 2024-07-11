const categoryModel = require("../model/category.model");

class CategoryService {
  async getAll() {
    const category = await categoryModel.find();
    return category;
  }

  async findOne(body){
    const data = await categoryModel.findOne({
      title:body
    })
    return data
  }

  async create(title, photo) {
    const category = await categoryModel.create({
      title,
      photo,
    });
    return category;
  }

  async update(id , body) {
    const category = await categoryModel.findByIdAndUpdate(id, body , {new:true});
    return category
  }

  async delete(id) {
    const category = await categoryModel.findByIdAndDelete(id);
    return category
  }
}

module.exports = new CategoryService();
