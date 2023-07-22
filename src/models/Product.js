const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    imageUrl: String,
    quantity: Number,
    rating: Number
},{versionKey: false, timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
