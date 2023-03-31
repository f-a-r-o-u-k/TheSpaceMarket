const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    money: {
        type: String,
        required: [true, "money is required."]
    },
    nameProduct: {
        type: String,
        required: [true, "nameProduct is required."]
    },
    description: {
        type: String,
        required: [true, "Description is required."]
    },
   
    image:{
        type: String,
        required: [true, "Images are required."]
    }, 
    isAccepted:{
        type: Boolean,
        default:false
    }
}, {timestamps:true});
    
    const Product =  mongoose.model('Product', ProductSchema);
    module.exports= Product