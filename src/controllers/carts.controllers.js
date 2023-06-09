import User from "../models/User.js";
import cartsService from "../services/carts.service.js";
import CustomError from "../utils/CustomError.utils.js";

export const handleCart = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) throw new CustomError(403, "Forbidden");
    const cart = await cartsService.handleCart(user._id);
    res.status(201).send({ status: "success", payload: cart });
  } catch (error) {
    next(error);
  }
};

// en todos estos casos estoy catcheando los errores
// tengo un middleware que despues distribuye las respuestas
// la respuesta es en funcion a si el error es uno custom hecho por mi (con status code)
// o uno que arroja el server (status 500 internal server error digamos)
export const createCart = async (req, res, next) => {
  try {
    const cart = await cartsService.createCart();
    res.status(201).send({ status: "success", payload: { cart } });
  } catch (error) {
    next(error);
  }
};
export const getCart = async (req, res, next) => {
  try {
    const cid = req.params.cid;
    const cart = await cartsService.getCart(cid);
    res.status(200).send({ status: "success", payload: { cart } });
  } catch (error) {
    next(error);
  }
};
export const addProduct = async (req, res, next) => {
  try {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const cart = await cartsService.addProduct(cid, pid);
    res.status(201).send({ status: "success", payload: { cart } });
  } catch (error) {
    next(error);
  }
};

export const checkout = async (req, res, next) => {
  try {
    const user = req.user;
    console.log(req.user)
    const cid = req.params.cid;
    const cart = await cartsService.checkout(cid);
    res.status(201).send({ status: "success", payload: { cart } });
  } catch (error) {
    next(error);
  }
};

export const removeProduct = async (req, res, next) => {
  try {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const cart = await cartsService.removeProduct(cid, pid);
    res.status(200).send({ status: "success", payload: { cart } });
  } catch (error) {
    next(error);
  }
};
export const updateCart = async (req, res, next) => {
  try {
    const cid = req.params.cid;
    const { products } = req.body;
    if (!products) throw new CustomError(400, "Faltan parametros");
    const cart = await cartsService.updateCart(cid, products);
    res.status(201).send({ status: "success", payload: { cart } });
  } catch (error) {
    next(error);
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const { quantity } = req.body;
    if (!quantity) throw new CustomError(400, "Faltan parametros");
    const cart = await cartsService.updateProduct(cid, pid, quantity);
    res.status(201).send({ status: "success", payload: { cart } });
  } catch (error) {
    next(error);
  }
};
export const clearCart = async (req, res, next) => {
  try {
    const cid = req.params.cid;
    const cart = await cartsService.clearCart(cid);
    res.status(200).send({ status: "success", payload: { cart } });
  } catch (error) {
    next(error);
  }
};  