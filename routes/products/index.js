import { Router } from "express";
import { getProduct, getSingleProduct } from '../../controllers/product/index.js';
var products = Router();
products.get('/products', getProduct)
products.get('/product/:id', getSingleProduct)


export default products;