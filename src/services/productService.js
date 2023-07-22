const productRepo = require('../repositories/productRepo');

const getAllProducts = async() => {
    return await productRepo.getAllProducts()
}

const create = async(product) => {
    return await productRepo.save(product);
}

module.exports = {
    create,
    getAllProducts
}