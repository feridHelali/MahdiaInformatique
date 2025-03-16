import { Router } from "express";
import {addProductController,getAllProductsController} from "../controllers/catalog.controller.mjs"

const router = Router();

router.post("/add",addProductController)
router.get("/all",getAllProductsController)


export default router;