
// importo dependencias
import express from 'express';
import mongoose from 'mongoose';
import studientsRouter from './routers/studients.router.js';
import usersRouter from './routers/users.router.js';

import { server, app } from './utils/socket.js';
import handlebars from 'express-handlebars';

// importo rutas
import cartsRoutes from './routers/cartsRouters.js';
import productsRoutes from './routers/productsRouters.js';
import viewsRoutes from './routers/views.router.js';


// seteo middlewares obligatorios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/studients', studientsRouter);
app.use('/api/users', usersRouter);

mongoose.connect("mongodb+srv://benjaminsarmiento:carlospaz@codercluster.n7ctytz.mongodb.net/?retryWrites=true&w=majority");

// configuro handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

// seteo la carpeta public como estática
app.use(express.static('public/'));

// seteo rutas
app.use('/', viewsRoutes);
app.use('/api/carts', cartsRoutes);
app.use('/api/products', productsRoutes);

// inicializo servidor
const port = 8080;
server.listen(port, () => console.log("escuchando 8080"));





/* Inicialización del servidor
const webServer = app.listen(8080, () => {
	console.log('Escuchando 8080');
});
// Inicialización de socket.io
const io = new Server(webServer);

socketServer.on("connection", socket=>{
  console.log("nuevo cliente conectado");

  socket.on("message", (data)=>{
    console.log(data);  //cuando el socket conectado envie un evento del tipo "message", responder por consola con la "data"
  })

  socket.emit("evento_para_ socket_individual", "hola, me estoy comunicando desde websocket")
  socket.broadcast.emit("evento_para_ todos_menos_para_el_socket_actual", "este envento lo van a ver todos, menos el socket que envio el mensaje")
  socketServer("evento_para_ todos", "este mensaje lo reciben todos los usuarios conectados")
  
})

app.listen(8080, ()=>{
  console.log("escuchando puerto 8080");
})*/

/********* */

/*// Importo express
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
});*/




/******************* */ 





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
  
 