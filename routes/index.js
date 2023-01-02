import { Router } from "express";
import products from "./products/index.js"
var collectionRouts = Router()
collectionRouts.use(products)
export default collectionRouts;