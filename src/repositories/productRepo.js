const Product = require('../models/Product');

const getAllProducts = () => {
    return Product.find({});
}

const save = (product) => {
    const newProduct = new Product(product);
    return newProduct.save();
}

module.exports = {
    save,
    getAllProducts
}