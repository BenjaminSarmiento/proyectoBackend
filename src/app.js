
import express from 'express';
import { productosRouter } from './routers/products.router.js';
import { cartsRouter } from './routers/carts.router.js';

// Creo app Express
const app = express();

// Seteo carpeta public como raiz de servidor estatico
app.use(express.static('public'));

// Middelare para parseo de json
app.use(express.json());

// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

// Utilizo ruta de products para "/api/products"
app.use('/api/products', productosRouter);

// Utilizo ruta de carts para "/api/carts"
app.use('/api/carts', cartsRouter);


app.listen(8080, () => {
	console.log('Levante el server papilooo');
});

















/*import express from "express";
import ProductoManager from "./ProductManager.js";
import { readFile } from 'fs/promises';


const app = express()
const ProductManager = new ProductoManager("./products")

app.use(express.urlencoded({extended:true}))

app.get("/products", async (req, res)=>{
    try {
    let limit = req.query.limit

    const productsData = await readFile('./products', 'utf8');
    const todosLosProductos = JSON.parse(productsData);

    // Devuelve todos los productos si no se recibe limit
    if (!limit) {
        res.send(todosLosProductos);
      } else {
        // Devuelve el numero de productos solicitados si se recibe el limit
        res.send(todosLosProductos.slice(0, limit));
      }
    } catch (error) {
      console.error(error);
    }
  });


// Defino el metodo get para /products/:id


app.get('/products/:id', async (req, res) => {
    try {
      const productsData = await readFile('./products', 'utf8');
      const todosLosProductos = JSON.parse(productsData);
  
      let idProduct = Number(req.params.id);  //convierto a numero
      let ret = todosLosProductos.find((product) => {  //busco el id que coincida con el ingresado y devuelvo el producto
        return Number(product.id) === idProduct; 
      });
  
      res.send(ret);
    } catch (error) {
      console.error(error);
    }
  });
  
  app.listen(8080, () => {
    console.log('Escuchando en el puerto 8080');
  });*/