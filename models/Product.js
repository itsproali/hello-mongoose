const mongoose = require("mongoose");

// Schema Design
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product Name Required..!"],
      trim: true,
      unique: [true, "{VALUE} Already Exist..!"],
      minLength: [3, "Minimum 3 character Required..!"],
      maxLength: [100, "Name is too large..!"],
    },
    description: {
      type: String,
      required: [true, "Product Description Required..!"],
      minLength: [50, "Try to describe about the product in details...!"],
    },
    price: {
      type: Number,
      required: [true, "Product Price Required..!"],
      min: [0, "Price cant't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "Unit can't be {VALUE}, must be kg/litre/pcs",
      },
    },
    quantity: {
      type: Number,
      min: 0,
    },
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    // },
  },
  { timestamps: true }
);

// Schema -> Model -> Query

// Product Model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
