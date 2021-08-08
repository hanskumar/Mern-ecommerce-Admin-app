var mongoose    = require("mongoose");

mongoose.set('debug', true);
var CategorySchema = new mongoose.Schema({
    
    name: {type: String,required: true},
    slug: {type: String, required: true, unique: true},
    type: {
        type: String,
    },
    categoryImage: { type: String ,default: 'default.jpg'},
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        default: '',
        ref: 'Category'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: { type:String,default:'active'}, 
    },
    { timestamps: true }
);


module.exports = mongoose.model("Category", CategorySchema);
