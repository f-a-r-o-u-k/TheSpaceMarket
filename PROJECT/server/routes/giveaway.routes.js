const TsmController = require("../controllers/user.controllers")


module.exports = (app) => {
    app.post("/api/newproduct", TsmController.Createproduct)

}