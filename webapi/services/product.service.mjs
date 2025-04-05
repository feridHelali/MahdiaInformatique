import Product from "../models/product.model.mjs"


export const addProductToCatalog = async (_product) => {
    return await Product.insertOne(_product);
}


export const getAllProducts = async () => {
    return await Product.find({});
}

export const getProductById = async (id) => {
    return await Product.findOne({ _id: id })

}

export const updateProduct = async (id, label, brand, description, price) => {
    return  await Product.updateOne({ _id: id }, { $set: { label, brand, description, price } })
 
}

export const removeProduct = async (id) => {
   return await Product.deleteOne({ _id: id })

}
