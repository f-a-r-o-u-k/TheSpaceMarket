const TsmController = require("../controllers/user.controllers")


module.exports = (app) => {
    app.post("/api/giveway", TsmController.Createproduct)

}