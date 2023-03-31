const Product = require('../models/createproduct.models')


//Add new Product

module.exports.CreateProduct = (req, res) => {
  Product.create(req.body)
    .then((createProduct) =>res.json(createProduct) )
    .catch(err => res.status(400).json(err));
}

// Get All Product
module.exports.GetAllProduct = (req, res) => {
  Product.find()
    .then(AllProduct =>res.json(AllProduct) )
    .catch(err => {res.status(400).json(err)})
}


// Get one Product
module.exports.GetOneProduct = (req, res) => {
  Product.findById(req.params.id)
    .then(Product =>res.json(Product) )
    .catch(err => {res.status(400).json(err)})
}

//Delete the Product

module.exports.DeleteOneProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
  .then(deleteProduct =>res.json(deleteProduct) )
}

// Update the Product

module.exports.UpdateOneProduct = (req, res) => {
  Product.findOneAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    .then(UpdateProduct =>res.json(UpdateProduct) )
    .catch(err => {res.status(400).json(err)})
};