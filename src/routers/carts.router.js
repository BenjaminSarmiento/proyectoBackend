import { Router } from "express";

import express from 'express';

const router = express.Router();

let carts = [];

router.post('/', (req, res) => {
  const newCart = {
    id: 5,
    products: []
  };

  carts.push(newCart);
  res.send(newCart);
});

router.get('/:cid', (req, res) => {
  const cartId = req.params.cid;
  const cart = carts.find((c) => c.id === cartId);

  if (!cart) {
    return res.status(404).send('Cart not found');
  }

  res.send(cart.products);
});

router.post('/:cid/product/:pid', (req, res) => {
  const cartId = req.params.cid;
  const productId = req.params.pid;
  const quantity = req.body.quantity;

  if (!quantity || quantity < 1) {
    return res.status(400).send('Invalid quantity');
  }

  const cart = carts.find((c) => c.id === cartId);

  if (!cart) {
    return res.status(404).send('Cart not found');
  }

  const productIndex = cart.products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    cart.products.push({ id: productId, quantity: quantity });
  } else {
    cart.products[productIndex].quantity += quantity;
  }

  res.send(cart.products);
});

export {cartsRouter}