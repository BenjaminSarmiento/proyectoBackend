
// importo express
import express from "express";
// importo mongoose
import mongoose from "mongoose";
// importo handlebars
import handlebars from "express-handlebars";
// importo el carts y el products router
import cartsRouter from "./routes/carts.router.js";
import productsRouter from "./routes/products.router.js";
// importo el router para las vistas
import viewsRouter from "./routes/views.router.js";

// importo un error middleware
import errorMiddleware from "./middleware/error.middleware.js";

// declaro mi app
const app = express();

// agrego middlewares de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setteo el engine
app.engine("handlebars", handlebars.engine());
// setteo rutas de archivos estaticos
app.use(express.static("public"));
//app.set("views", path.join(__dirname, "..", "/views"));
app.set("views", "views/");
app.set("view engine", "handlebars");

// defino las rutas
app.use("/api/carts", cartsRouter);
app.use("/api/products", productsRouter);
app.use("/", viewsRouter);

// agrego el middleware para el manejo de error
app.use(errorMiddleware);

// conecto a mongoose
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

// levanto al servidor en puerto 8080
app.listen(8080, () => {
  console.log("Escuchando en puerto 8080");
});




/*io.on('connection', (socket) => {
	// Envio los mensajes al cliente que se conectó
	socket.emit('messages', messages);

	// Escucho los mensajes enviado por el cliente y se los propago a todos
	socket.on('message', (message) => {
		console.log(message);
		// Agrego el mensaje al array de mensajes
		messages.push(message);
		// Propago el evento a todos los clientes conectados
		io.emit('messages', messages);
	});

	socket.on("sayhello", (data) => {
		socket.broadcast.emit("connected", data); 
	})
});*/

















/*import express from 'express';
import mongoose from 'mongoose';
import studientsRouter from './routers/studients.router.js';
import usersRouter from './routers/studients.router.js';

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
server.listen(port, () => console.log("escuchando 8080"));*/