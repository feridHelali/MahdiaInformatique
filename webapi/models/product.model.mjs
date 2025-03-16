import mongoose, { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
    label: {
        type: String,
        required: [true, "label is required"],
        unique: true
    },
    brand: {
        type: String,
        required: [true, "brand is required"]
    },
    description: {
        type: String,
        default: ''
    },
    photos_url: Array,
    cover_url: {
        type: String,
        default: "uploads/default.png"
    },
    price: {
        type: Number
    }
}, {
    timestamps: true
}
)

ProductSchema.index({name:'text','label':"text",'brand':"text"})

const model = mongoose.model("Product", ProductSchema);
export default model;