const mongoose = require("mongoose")




const adminSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: [true, "Email is required"],
    },
    Password: {
        type: String,
        required: [true, "Password is required"],
    },
    // CodeAdmin: {
    //     type: String,
    //     required: [true, "Code Admin is required"],
    // },
}, { timestamps: true })


module.exports.admin = mongoose.model("admin", adminSchema);
