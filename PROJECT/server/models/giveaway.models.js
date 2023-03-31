const mongoose = require("mongoose")




const TsmSchema = new mongoose.Schema({
    Name: {
        type: String,
        requird: [true, "Name is required"],
    },
    PhoneNumber: {
        type: Number,
        required: [true, "Phone Number is required"],
    }
}, { timestamps: true })


module.exports.Tsm = mongoose.model("Tsm", TsmSchema);