const mongoose = require("mongoose")




const TsmSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        requird: [true, "First Name is required"],
    },
    LastName: {
        type: String,
        required: [true, "Last Name is required"],
    },
    Email: {
        type: String,
        required: [true, "Email is required"],
    },
    Password: {
        type: String,
        required: [true, "Password is required"],
    },
    ConfirmPassword: {
        type: String,
        required: [true, "Confirm Password is required"],
    },
}, { timestamps: true })


module.exports.Tsm = mongoose.model("Tsm", TsmSchema);
