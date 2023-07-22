const productService = require('../services/productService');

const getAllProducts = async(req, res) => {
    const products = await productService.getAllProducts();
    res.render('index', { products });
}

const create = async(req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        imageUrl: req.body.imageUrl,
        quantity: req.body.quantity,
        rating: req.body.rating,
    }

    const newProduct = await productService.create(product);
    res.status(201).json(newProduct);
}

module.exports = {
    getAllProducts,
    create
}