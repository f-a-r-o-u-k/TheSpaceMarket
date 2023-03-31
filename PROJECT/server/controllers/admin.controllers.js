const {admin}  = require("../models/admin.models")





module.exports.Createadmin = (req, res) => {
    admin.create(req.body)
        .then(newproduct => { res.json({ product: newproduct }) })
        .catch(err => res.status(400).json({
            messge: "Somthing went wrong", error: err
        }))
}

module.exports.GetAlladmin = (req, res) => {
    admin.find()
      .then((users) => res.json({ users }))
      .catch((err) => res.status(400).json({ msg: 'Something went wrong', err }));
  };
  

module.exports.findOneadmin = (req, res) => {
    admin.findOneadmin({ _id: req.params.product_id })
        .then(oneproduct => res.json(oneproduct))
        .catch(err => res.status(400).json(err))
}