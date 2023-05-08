/*import { Router } from "express";
import ProductManager from "../ProductManager";

const productos = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
]
const productosRouter = Router()

productosRouter.get("/", async (req, res)=> {
    try {
        let limit = req.query.limit
    
    if (!limit) {
        res.send(productos);
      } else {
        // Devuelve el numero de productos solicitados si se recibe el limit
        res.send(productos.slice(0, limit));
      }
    } catch (error) {
      console.error(error);
    }
    });

    productosRouter.get('/:pid', (req, res) => {
      const productId = parseInt(req.params.pid);
      const product = productos.find((p) => p.id === productId);
      if (!product) {
        res.status(404).send('No encontre el producto :(');
      } else {
        res.send(product);
      }
    });

productosRouter.post("/", async(req, res)=> {
    
    try{
        const newproducto = req.body
        res.status(201).send(await ProductManager.addProduct(newproducto))
    }
    catch{
        res.status(400).send(err)
    }
})

export {productosRouter}*/








import { Router } from "express";
import express from 'express';
const router = express.Router();
const productosRouter = Router()


let products = [
  {
    id: 1,
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    code: 'PROD1',
    price: 100,
    status: true,
    stock: 10,
    category: 'Categoría 1',
    thumbnails: []
  },
  {
    id: 2,
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    code: 'PROD2',
    price: 200,
    status: true,
    stock: 5,
    category: 'Categoría 2',
    thumbnails: []
  }
];

// Ruta raíz GET /api/products
router.get('/', (req, res) => {
  const limit = req.query.limit;
  let results = products;

  if (limit) {
    results = results.slice(0, limit);
  }

  res.send(results);
});

// Ruta GET /api/products/:pid
productosRouter.get('/:pid', (req, res) => {
  const productId = req.params.pid;
  const product = productos.find(producto => producto.id === productId);

  if (!product) {
    res.status(404).send('Producto no encontrado');
  } else {
    res.send(product);
  }
});
// Ruta raíz POST /api/products
router.post('/', (req, res) => {
  const newProduct = req.body;

  if (!newProduct.title || !newProduct.description || !newProduct.code || !newProduct.price || !newProduct.stock || !newProduct.category) {
    return res.status(400).send('campos incompletos');
  }

  const ids = products.map(p => p.id);
  const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;
  const product = {
    id: newId,
    title: newProduct.title,
    description: newProduct.description,
    code: newProduct.code,
    price: newProduct.price,
    status: newProduct.status || true,
    stock: newProduct.stock,
    category: newProduct.category,
    thumbnails: newProduct.thumbnails || []
  };

  products.push(product);
  res.status(201).send(product);
});

// Ruta PUT /api/products/:pid
router.put('/:pid', (req, res) => {
  const pid = req.params.pid;
  const productIndex = products.findIndex(p => p.id == pid);

  if (productIndex === -1) {
    return res.status(404).send('Producto no encontrado');
  }

  const updatedProduct = req.body;

  if (updatedProduct.id && updatedProduct.id !== pid) {
    return res.status(400).send('El id no se puede actualizar');
  }

  const product = products[productIndex];
  product.title = updatedProduct.title || product.title;
  product.description = updatedProduct.description || product.description;
  product.code = updatedProduct.code || product.code;
  product.price = updatedProduct.price || product.price;
  product.status = updatedProduct.status || product.status;
  product.stock = updatedProduct.stock || product.stock;
})

export {productosRouter}