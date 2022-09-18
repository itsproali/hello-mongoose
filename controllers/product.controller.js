const Product = require("../models/Product");


// Get Product
exports.getProduct = async (req, res, next) => {
  try {
    /** There are 3 ways to get/find data
     * find === [Gives multiple data As like mongodb, make shortened the use of projection]
     * findById === [Gives one data according to Id]
     * where === []
     *  */

    // method: 01 === const result = await Product.find({ name: {$in: [/.*itel.*/i]} }, "-description");
    // method: 02 === const result = await Product.findById("6326ec16fa32a413b8a099ab");
    // method: 03 === const result = await Product.where("price").gt(5000);

    const result = await Product.find(
      { name: { $in: /.*itel.*/i } },
      "-description"
    );
    res.status(200).send({
      success: true,
      message: "Successfully Got Products",
      data: result,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Insert a Product
exports.insertProduct = async (req, res, next) => {
  try {
    /** There are two way to insert data
     * save [When we need to manage or validate with the requested data]
     * create [When don't need to change any given data]
     * */

    /* 
      // Insert using save
  
      const product = new Product(req.body);
      if(product.quantity === 0) {
        product.status === "out-of-stock"
      }
      const result = await product.save();
      */

    // Insert using create
    const result = await Product.create(req.body);

    res.status(200).json({
      success: true,
      message: "Product posted successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
