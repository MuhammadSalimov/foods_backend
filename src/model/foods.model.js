const { model, Schema } = require("mongoose");

const Food = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
    description: { type: String },
    isActive:{type : Boolean , default:true},
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Food", Food);
