const Product = require("../../../models/product");

function categoriesController() {
  return {
    async index(req, res) {
      const product = await Product.find();
      return res.render("customers/product", { product: product });
    },
  };
}

module.exports = categoriesController;
