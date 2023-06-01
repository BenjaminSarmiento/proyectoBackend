
import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import studentRouter from './routers/student.router.js';
import courseRouter from './routers/course.router.js';
import viewsRouter from './routers/views.router.js';

const app = express();

app.use(express.json());
// Utilizamos el middleware para parsear los datos de la petición
app.use(express.urlencoded({ extended: true }));

// Set handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

// Seteo el directorio de archivos estáticos
app.use(express.static('public'));

app.use('/api/students', studentRouter);
app.use('/api/courses', courseRouter);
app.use('/', viewsRouter);

mongoose.connect(
	'mongodb+srv://benjaminsarmiento:carlospaz@codercluster.n7ctytz.mongodb.net/?retryWrites=true&w=majority'
);

app.listen(8080, () => {
	console.log('escucho el 8080');
});

















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