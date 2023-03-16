const { user } = require("../models/user.models")



module.exports = (req, res) => {
    res.json("The server say hello world")
}


//Create a new user
module.exports.Createuser = (req, res) => {
    user.create(req.body)
        .then(newuser => { res.json({ product: newuser }) })
        .catch(err => res.status(400).json({
            messge: "Somthing went wrong", error: err
        }))
}

// Get One user
module.exports.findOneuser = (req, res) => {
    user.find({ _id: req.params.user_id })
        .then(oneproduct => res.json(oneproduct))
        .catch(err => res.status(400).json(err))
}
