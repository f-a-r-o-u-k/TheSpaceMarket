const mongoose = require("mongoose")




const TsmSchema = new mongoose.Schema({
    Name: {
        type: String,
        requird: [true, "Name is required"],
    },
    PhoneNumber: {
        type: String,
        required: [true, "Phone Number is required"],
    },
    Adresse: {
        type: String,
        required: [true, "Adresse is required"],
    }
}, { timestamps: true })


module.exports.Tsm = mongoose.model("Tsm", TsmSchema);