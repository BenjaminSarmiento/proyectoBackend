// importo express
import express from "express";
// importo mongoose
import mongoose from "mongoose";
// importo handlebars
import handlebars from "express-handlebars";
// importo el carts y el products router
import cartsRouter from "./routes/carts.router.js";
import productsRouter from "./routes/products.router.js";
import userRouter from "./routes/user.router.js";
// importo el router para las vistas
import viewsRouter from "./routes/views.router.js";
// importo el cookie parser
import cookieParser from "cookie-parser";
// importo passport
import passport from "passport";
import initPassport from "./config/passport.config.js";
// importo un error middleware
import errorMiddleware from "./middleware/error.middleware.js";
// importo middleware de jwt
import jwtMiddleware from "./middleware/jwt.middleware.js";

import userMiddleware from "./middleware/user.middleware.js";
import { isAuth } from "./middleware/auth.middleware.js";

// declaro mi app
const app = express();

import dotenv from "dotenv";

dotenv.config();

// creamos instancias //
import mongoose from 'mongoose';
import express from 'express';
import { server, app } from './utils/socket.js';
import handlerbars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import passport from 'passport';
// creamos rutas de js //
import { productRouter } from './routes/products.router.js';
import { cartRouter } from './routes/carts.router.js';
import wiewsRouter from './routes/views.router.js';
import { menssagerModel } from "../src/models/menssage.model.js";
import { userRouter } from './routes/user.router.js';
import { ticketRouter } from './routes/ticket.router.js';
import inicializePassport from './config/passport.config.js';
import enviroment from './config/enviroment.js';


import { io } from './utils/socket.js';

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.engine('handlebars', handlerbars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

app.use(express.static('public'))


app.use(cookieParser())


app.use(
  session({
    store: MongoStore.create({
      mongoUrl: enviroment.DB_LINK_CREATE,
      mongoOptions: {
        useNewUrlParser: true,
      },
      ttl: 6000,
    }),
    secret: 'B2zdY3B$pHmxW%',
    resave: true,
    saveUninitialized: true,
  })
);
inicializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.post('/', async (req, res) => {

  try {

    const { user, menssage } = req.body;
    const newMessage = new menssagerModel({ user, menssage });
    await newMessage.save();

    const messages = await menssagerModel.find({}).lean();

    io.emit('List-Message', {
      messages: messages

    })

    res.redirect('/chat');
  } catch (err) {
    res.render('error', { error: err.message });
  }
});

mongoose.connect(
  enviroment.DB_LINK
);

app.use('/', wiewsRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/api/users', userRouter);
app.use('/api/purchase', ticketRouter);


const httpServer = enviroment.PORT;
server.listen(httpServer, () => console.log(`estoy escuchando ${httpServer}...`));