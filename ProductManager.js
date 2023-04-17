class ProductManager {
	#id = 0;  //privado

	constructor() {
		this.products = [];
	}

	getProducts() {
		return this.products;
	}

	addProduct(Title, Description, Price, Thumbnail, Code, Stock) {
		let filtro = this.products.filter((prod) => prod.Code === Code) //verifico que no se repita el codigo
		if (filtro.length > 0) {
			console.log("el codigo ya existe");
		}

		const product = {
			Title,
			Description,
			Price,
			Thumbnail,
			Code,
			Stock,
		};

		// le agrego el ID al producto
		product.id = this.#getID();

		//verifico que los campos sean obligatorios
		if (product.Title === undefined || product.Description === undefined || product.Price === undefined || product.Thumbnail === undefined || product.Code === undefined || product.Stock === undefined) {
			console.log("ERROR: Debes completar los campos requeridos");
			return;
		} this.products.push(product);  // Agrego el producto a la lista de productos
	}

	
	#getID() {    // privado y lo incremento para que no se repita
		this.#id++;
		return this.#id;
	}
    getProductById(idProduct){ 
        const productindex = this.products.findIndex((product) => product.id === idProduct) 
        const seeID = this.products.find((product) => product.id === idProduct)
        if (productindex === -1) {
            console.log("not found");  //si no lo encuentra me devuelve not found
            return;
        } else {
            console.log(seeID);  
        }
    }
}

//PRUEBAS
const productManager = new ProductManager();
productManager.addProduct('proteina mag', 'proteina en polvo', 5000, "./img/proteina_mag.png", 30, 10);
productManager.addProduct('creatina gold',"100% pura", 6000, "./img/creatina_gold.png", 10, 200);
productManager.getProductById(9);  //pongo un id que no existe para que aparezca "not found"
console.log(productManager.getProducts());