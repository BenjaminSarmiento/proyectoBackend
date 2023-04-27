import express from "express";
import ProductoManager from "./ProductManager.js";

const app = express()
const productManager = new ProductoManager()

app.use(express.urlencoded({extended:true}))

app.get("/products", async (req, res)=>{
    
    try{
        let allProducts = await productManager.getProducts()
        res.send(allProducts)
    }
    catch(err){
        res.send(err);
    }
})


app.listen(8080, ()=>{
    console.log("escuchando 8080");
})











/*app.get("/bienvenida", (req, res)=>{
   
    res.send('<p style= "color: blue">te damos la sbienvenida</p>')
})

app.get("/usuario", (req, res)=>{
    const user =   {
        nombre: "benja",
        apellido: "sarmiento",
        edad: "19",
        correo: "benjasarmiento123",
    };
    res.send(user)
})

app.listen(8080, ()=>{
    console.log("escuchando 8080");
})*/