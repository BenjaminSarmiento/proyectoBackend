import express from "express";
import ProductoManager from "./ProductManager.js";

const app = express()
const ProductManager = new ProductoManager("./products")

app.use(express.urlencoded({extended:true}))

app.get("/products", async (req, res)=>{
    let limit = req.query.limit
    if (!limit) {
        res.send(products)
    } else{
        res.send()//tengo que enviarle la cantidad de productos que es limit
    }



    try{
        const allProducts = await ProductManager.getProducts()   //cambie el productManager a ProductManager //cambie LET POR CONST
        res.send(allProducts)
    }
    catch(err){
        res.send(err);
    }
})


// Defino el metodo Get para /product/:id

app.get('/product/:id', (req, res) => {
	let ret = allProducts.find((product) => { // Buscamos el producto por id  //cambie products por allProducts
		return product.id === req.params.id;
	});
	res.send(ret); 
});



app.listen(8080, ()=>{
    console.log("escuchando 8080");
})

//ENDPOINTS A IMPLEMENTAR

//query param ?limit =  CON UN IF??








/***************************PRACTICA******************************************/

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