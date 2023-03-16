const mongoose = require("mongoose")




const TsmSchema = new mongoose.Schema({
    Email: {
        type: String,
        requird: [true, "Email is required"],
    },
    Password: {
        type: String,
        required: [true, "Password is required"],
    },
    CodeAdmin: {
        type: String,
        required: [true, "Code Admin is required"],
    },
}, { timestamps: true })


module.exports.Tsm = mongoose.model("Tsm", TsmSchema);
