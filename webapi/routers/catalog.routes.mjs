import { Router } from "express";
import {addProductController,deleteProductController,getAllProductsController, getProductByIdController, updateProductController} from "../controllers/catalog.controller.mjs"

const router = Router();

router.post("/add",addProductController)
router.get("/all",getAllProductsController)
router.get("/one/:id",getProductByIdController)
router.put("/update/:id",updateProductController)
router.delete("/delete/:id",deleteProductController)


export default router;