
// Importo express
import express from 'express';

// Importo rutas
import productsRoutes from './routers/productsRouters.js';
import cartsRoutes from './routers/cartsRouters.js';

const app = express();
const port = 8080; // Almaceno valor del puerto que escuchará el servidor

// Middlewares
// Para interpretar mensajes de tipo JSON en formato urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Para utilizar las rutas
app.use('/api/products', productsRoutes);
app.use('/api/carts', cartsRoutes);


// Inicializo el servidor
app.listen(port, () => {
	console.log(`Listen Port ${port}`);
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