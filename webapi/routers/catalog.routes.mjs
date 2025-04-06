import { Router } from "express";
import {addProductController,deleteProductController,getAllProductsController, getProductByIdController, updateProductController, uploadProductCoverController} from "../controllers/catalog.controller.mjs"
import verifyToken from "../midllwares/isAuthenticated.mjs";
import isAdmin from "../midllwares/isAdmin.mjs"

const router = Router();

router.post("/add",verifyToken,isAdmin,addProductController)
router.get("/all",getAllProductsController)
router.get("/one/:id",getProductByIdController)
router.put("/update/:id",verifyToken,isAdmin,updateProductController)
router.delete("/delete/:id",verifyToken,isAdmin,deleteProductController)
router.put("/upload/:id",verifyToken,isAdmin,uploadProductCoverController)


export default router;