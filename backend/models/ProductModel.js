var mongoose    = require("mongoose");

mongoose.set('debug', true);
var ProductSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String, 
        required: true, 
        unique: true
    },
    price: { 
        type: Number, 
        required: true 
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    productImages: [{ type: String} ],
    reviews: [
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: { type:String,default:'active'}, 
    createdAt: Date,
    },
    { timestamps: true }
);


module.exports = mongoose.model("Product", ProductSchema);
