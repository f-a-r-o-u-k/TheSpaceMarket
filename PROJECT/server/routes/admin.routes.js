const TsmController = require("../controllers/")


module.exports = (app) => {
    app.delete("/api/deleteOneproduct/:product_id", TsmController.DeleteOneproduct)
    app.put("/api/UpdateOneproduct/:product_id", TsmController.UpadateOneproduct)

}
