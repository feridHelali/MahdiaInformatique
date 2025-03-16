import Product from "../models/product.model.mjs"


export const addProductToCatalog = async (_product)=>{
    return await Product.insertOne(_product);
}


export const getAllProducts = async ()=>{
   return await Product.find({});
}

