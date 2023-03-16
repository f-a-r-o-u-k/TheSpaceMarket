const { product } = require("../models/user.models")



module.exports = (req, res) => {
    res.json("The server say hello world")
}


//Create a new Produit
module.exports.Createproduct = (req, res) => {
    product.create(req.body)
        .then(newproduct => { res.json({ product: newproduct }) })
        .catch(err => res.status(400).json({
            messge: "Somthing went wrong", error: err
        }))
}

//Read AllProduits
module.exports.findAllproduct = (req, res) => {
    product.find()
        .then(products => { res.json(products) })
        .catch(err => res.status(400).json({
            messge: "Somthing went wrong", error: err
        }))

}

// Get One Produit
module.exports.findOneproduct = (req, res) => {
    product.find({ _id: req.params.product_id })
        .then(oneproduct => res.json(oneproduct))
        .catch(err => res.status(400).json(err))
}



//Delete One Produit 

module.exports.DeleteOneproduct = (req, res) => {
    product.deleteOne({ _id: req.params.product_id })
        .then(result => res.json("Delete with succ"))
        .catch(err => res.status(400).json(err))
}

//Update One Produit 

module.exports.UpadateOneproduct = (req, res) => {
    product.findOneAndUpdate({ _id: req.params.product_id }, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}
