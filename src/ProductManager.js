import fs from "fs"

export default class ProductManager {
	#id = 0;  //privado

	constructor(path) {
		this.path = path;
		 fs.promises.writeFile(this.path, JSON.stringify([]));
	}

	#readFile = async () => {
		const readProduct = await fs.promises.readFile(this.path, 'utf-8');
		return JSON.parse(readProduct);
	};

	getProducts = async () => {
		let obtenerProductos = await this.#readFile();
		console.log(obtenerProductos);
	};




	addProduct = async (title, description, price, thumbnail, code, stock, status = true, category) => {

		//verifico que los campos sean obligatorios
		if (title === undefined || description === undefined || price === undefined || status === undefined || code === undefined || stock === undefined || category === undefined) {
			console.log("ERROR: Debes completar los campos requeridos");
			return;
		}
         
		 let products = await this.#readFile();

		let filtro = products.find((prod) => prod.code === code) //verifico que no se repita el codigo
		if (filtro) {
			console.log("el codigo ya existe");
			return
		}
		

		const product = {
			title,
			description,
			price,
			thumbnail,
			code,
			stock,
			category,
			status,
		};

		// le agrego el ID al producto
		product.id = this.#getID();

		products.push(product);  // Agrego el producto a la lista de productos

	  await fs.promises.writeFile(this.path, JSON.stringify(products))
	}

	#getID() {    // privado y lo incremento para que no se repita
		this.#id++;
		return this.#id;
	}




    getProductById = async(idProduct) =>{ 
	let products = await this.#readFile();
        //const productindex = this.products.findIndex((product) => product.id === idProduct) 
        const seeID = products.findIndex((product) => product.id === idProduct)
        if (seeID === -1) {  //productIndex
            console.log("not found");  //si no lo encuentra me devuelve not found
            return;
        } else {
            console.log(products[seeID]);  
        }
    }

	
	upDateProduct = async({id, ...product}) => {
		if (product.title === undefined || product.description === undefined || product.price === undefined || product.thumbnail === undefined || product.code === undefined || product.stock === undefined || id === undefined) {
			console.log("ERROR: Debes completar los campos requeridos");
			return;
		}
		await this.deleteProduct(id)
		const productosViejos = await this.#readFile();
		const nuevoArray = [{...product, id}, ...productosViejos] 
		await fs.promises.writeFile(this.path, JSON.stringify(nuevoArray))
	}

	



   deleteProduct = async(idEliminarProducto)=>{
	let products = await this.#readFile();
    const encontrarIndex = await products.findIndex((product) => product.id === idEliminarProducto)
        if (encontrarIndex === -1) {
            console.log("not found");
            return;
        }
		let nuevosProductos = products.filter((products) => products.id != idEliminarProducto)
		await fs.promises.writeFile(this.path, JSON.stringify(nuevosProductos))
	}

}

//PRUEBAS
const listaDeProductos = new ProductManager("./products");

const tester = async() => {
	try{
		//await listaDeProductos.getProducts();
		await listaDeProductos.addProduct('proteina mag', 'proteina en polvo', 5000, "./img/proteina_mag.png", 30, 10);
		await listaDeProductos.addProduct('creatina gold',"100% pura", 6000, "./img/creatina_gold.png", 10, 200);
		await listaDeProductos.addProduct('creatina ena',"creatina micronizada", 7000, "./img/creatina_gold.png", 12, 20);
		await listaDeProductos.addProduct('creatina star',"creatina creapure", 9000, "./img/creatina_gold.png", 1234, 2);
		await listaDeProductos.addProduct('creatina ultratech',"creatina importada", 8000, "./img/creatina_gold.png", 543, 100);
		//await listaDeProductos.getProductById(1); 
		//await listaDeProductos.getProducts();
		await listaDeProductos.upDateProduct({
			title: 'bolsa de boxeo',
			description: "bolsa de plastico",
			price: 4784,
			thumbnail: "sin imagen",
			code: 227940,
			stock: 7382,
			id: 2
		})
		await listaDeProductos.getProducts();
		//await listaDeProductos.deleteProduct(1)
		//await listaDeProductos.getProducts();
	}
	
	catch(err){
		console.log(err);
	}
}

tester()

