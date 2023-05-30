import ProductsController from '../service/ProductsController.js';
import CartsController from '../service/CartsController.js';

export const listOfProducts = new ProductsController();
export const listOfCarts = new CartsController();