const categoryService = require("../service/category.service");

class CategoryController {
  async categoryAll(req, res) {
    const category = await categoryService.getAll();
    res.json({ message: "ok", data: category });
  }

  async create(req, res) {
    try {
      const { title, photo } = req.body;
      const category = await categoryService.create(title, photo);
      if(category){
        res.redirect("/api/admin")
      }
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await categoryService.update(id , req.body);
      res.json({ message: "delete", data });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const data = await categoryService.delete(id);
    res.json({ message: "delete", data });
  }
}

module.exports = new CategoryController();
