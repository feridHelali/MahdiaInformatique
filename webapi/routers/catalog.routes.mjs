import { Router } from "express";
import {addProductController,deleteProductController,getAllProductsController, getProductByIdController, updateProductController, uploadProductCoverController} from "../controllers/catalog.controller.mjs"

const router = Router();

router.post("/add",addProductController)
router.get("/all",getAllProductsController)
router.get("/one/:id",getProductByIdController)
router.put("/update/:id",updateProductController)
router.delete("/delete/:id",deleteProductController)
router.put("/upload/:id",uploadProductCoverController)


export default router;