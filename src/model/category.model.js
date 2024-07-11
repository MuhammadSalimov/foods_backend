const { model, Schema } = require("mongoose");

const Category = new Schema(
  {
    title: { type: String, require: true },
    photo: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Category", Category);