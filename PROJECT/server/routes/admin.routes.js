const adminController = require("../controllers/admin.controllers")


module.exports = (app) => {
    app.post("/api/createadmin",adminController.Createadmin)
    app.get("/api/alladmin",adminController.GetAlladmin)

}
