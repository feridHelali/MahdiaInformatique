import { addProductToCatalog, getAllProducts, getProductById, removeProduct, updateProduct } from "../services/product.service.mjs"

export const addProductController = async (req, res, next) => {
    const _product = req.body;
    try {
        const result = await addProductToCatalog(_product)
        return res.status(201).json({
            data:result
        })
    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

export const getAllProductsController = async (req,res,next)=>{
    try {
        const result=await getAllProducts();
        return res.status(200).json({data:result})
    } catch (error) {
        return res.status(404).json({error:error.message})
    }

}


export const getProductByIdController = async (req,res,next)=>{
    const id= req.params.id;
    try {
        const result = await getProductById(id);
        return res.status(200).json({data:result})
    } catch (error) {
        return res.status(404).json({error:error.message})
    }
}

export const updateProductController = async (req,res,next)=>{
    const id = req.params.id;
    const {label,brand,description,price}=req.body;
    try {
        const result = await updateProduct(id,label,brand,description,price);
        return res.status(200).json({data:result})
    } catch (error) {
      return res.status(402).json({error:error.message})  
    }


}

export const deleteProductController=async(req,res,next)=>{
        const id=req.params.id;
        try {
            const result= await removeProduct(id);
            return res.status(200).json({data:result})
        } catch (error) {
            return res.status(404).json({error:error.message})
        }
}

