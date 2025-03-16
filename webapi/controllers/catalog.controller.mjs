import { addProductToCatalog, getAllProducts } from "../services/product.service.mjs"

export const addProductController = async (req, res, next) => {
    const _product = req.body;
    try {
        const result = await addProductToCatalog(_product)
        return res.status(201).json({
            result
        })
    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

export const getAllProductsController = async (req,res,next)=>{
    try {
        const result=await getAllProducts();
        return res.status(200).json({products:result})
    } catch (error) {
        return res.status(404).json({error:error.message})
    }

}


