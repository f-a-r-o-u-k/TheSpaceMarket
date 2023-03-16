const mongoose = require("mongoose")




const TsmSchema = new mongoose.Schema({
    Money : {
        type: String,
        requird: [true, "Money is required"],
    },
    NameProduit: {
        type: String,
        required: [true, "Name Produit is required"],
    },
    Détails: {
        type: String,
        required: [true, "Détails is required"],
    }
}, { timestamps: true })


module.exports.Tsm = mongoose.model("Tsm", TsmSchema);