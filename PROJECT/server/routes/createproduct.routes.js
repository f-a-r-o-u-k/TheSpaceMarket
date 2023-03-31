const {CreateProduct, GetAllProduct,GetOneProduct, DeleteOneProduct,UpdateOneProduct} = require("../controllers/product.controllers");


module.exports = (app) => {
    app.post("/api/newProduct", CreateProduct)
    app.get("/api/allProduct",GetAllProduct)
    app.get("/api/oneProduct/:product_id",GetOneProduct)
    app.delete("/api/deleteOneproduct/:product_id", DeleteOneProduct)
    app.put("/api/UpdateOneProduct/:product_id", UpdateOneProduct)
}
