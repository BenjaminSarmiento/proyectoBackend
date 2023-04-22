



//EN ESTE FILE SOLO HAY PRACTICAS QUE USO EN CLASE, NO ES NINGUN ENTREGABLE















/*function mostrarLista([element, element2]) {
    if (mostrarLista = []) {
        console.log("la lista esta vacia");
    } else {
        console.log(mostrarLista.forEach)
    }
    
    console.log(`la longitud de la lista es ${mostrarLista.length}`);
}

function mostrarLista(list) {
    const cantElem = list.length
    if (cantElem) {
        list.forEach((element) => {
            console.log(element);
        })
        
    } else {
        console.log("lista vacia");
    }
    return `cantidad de elementos ${cantElem}`
}

console.log(mostrarLista([]));



class contador{

    static contadorGrupal = 0
    
    constructor(name){
        this.responsable
        this.contadorIndividual = 0
    }

    

}*/

/*function saludo(nombre) {
    console.log("Hola ! ");
    console.log(nombre);
}
saludo("benja")*/

/*const objetos = [
{
    manzanas:3,
    peras:2,
    carne:1,
    jugos:5,
    dulces:2,
},
{
    manzanas:1,
    sandias:1,
    huevos:6,
    jugos:1,
    panes:4,
},
]

let nuevaLista = []
console.log(nuevaLista);*/



/*                                FS CON CALLBACKS                               */



/*const { log } = require("console");
const fs = require ("fs");

fs.writeFile("./saveDate.txt", `${new Date()}`, (err)=> {
if (err) return console.log("no se escribir");


    fs.readFile("./saveDate.txt", "utf-8", (err, contenido) => {
        if (err) return console.log("no se leer");
        console.log(contenido);

    })
    fs.unlink("./saveDate.txt", (err) => {
        if (err) return console.log("no se puede borrar");
    })
})*/

/*                                    FS CON PROMESAS                     */


/*const fs = require("fs")  //siempre se define esta linea al usar fs

const opAsync = async() => { //Defino la funcion opAsinc para que sea asincronica, pero su contenido puede ser sincronico
    try{

        
       await fs.promises.writeFile("./fsPromesa.txt", "Vas a ser millonario")  //pongo await para que espere y sea sincronico
       let contenido = await fs.promises.readFile("./fsPromesa.txt", "utf-8")
       console.log(contenido);

       await fs.promises.appendFile("./fsPromesa.txt", " y tambien vas a tener una empresa de aviones")

       contenido = await fs.promises.readFile("./fsPromesa.txt", "utf-8")
       console.log(contenido);

       await fs.promises.unlink("./fsPromesa.txt")
    }
    catch (err){
        console.log("error pa"); //en caso de error devuelve esto, uso catch
    }
}

opAsync(); //llamo a la funcion*/


/*const fs = require("fs") 


const opAsinc = async() =>{  //declaro funcion y la hago asincronica
    try{
        const package = await fs.promises.readFile("./json/package.json", "utf-8")  //guardo en la funcion package el contenido de package.json
        const info = {  //creo info y le pongo datos de package
            file: JSON.stringify(package),
            Object: JSON.parse(package)
        }

        fs.promises.writeFile("./json/info.json", JSON.stringify(info))  //escribo el contenido de info en un file llamado info.json
        console.log(info); //lo muestro en consola
    }
    
    catch (err){
        console.log(`error: ${err}`);  //pongo catch errror por si algo falla
    }
}

opAsinc()  //llamo a la funcion antes creada*/



/******************************************************************************************************************************************************************************/




/*// Llamo a la libreria fs y la guardo en variable fs
const fs = require('fs');

// Creo la clase UserManager
class UserManager {
	// Seteo el constructor
	constructor() {
		// Si no existe creo ./users.json
		if (!fs.existsSync('./users.json')) {
			// escribo el archivo de forma sincronica con un array vacio
			fs.writeFileSync('./users.json', JSON.stringify([]));
		}
	}
	async addUser(user) {
		// Intento...
		try {
			// Obtengo los usuarios actuales
			const actualUsers = await this.getUsers();
			// Agrego el nuevo usuario
			actualUsers.push(user);

			// Escribo nuevamente el archivo ./users.json
			await fs.promises.writeFile('./users.json', JSON.stringify(actualUsers) // Transformo el array en string
            );
		} catch (err) {
			// Si hay error imprimo el error en consola
			console.log('No puedo agregar usuarios');
		}
	}

	async getUsers() {
		// Intento...
		try {
			// Guardo en actualUsers el contenido de ./users.json
			const actualUsers = await fs.promises.readFile(
				'./users.json',
				'utf-8'
			);
			// Retorno actualUsers parseado
			return JSON.parse(actualUsers);
		} catch (err) {
			// Si hay error imprimo el error en consola
			console.log('No puedo darte usuarios');
		}
	}
}

// Creo una instancia de User Manager
const users = new UserManager();

// Creo una funcion asincronica
const test = async () => {
	// intento
	try {
		// Agregar usuario
		await users.addUser({
			nombre: 'Pato',
			apellido: 'Decima',
			edad: 27,
			curso: 43330,
		});
		// Agregar usuario
		await users.addUser({
			nombre: 'Julian',
			apellido: 'Fuentes',
			edad: 23,
			curso: 43330,
		});

		// Imprimo los usuarios que administra
		console.log(await users.getUsers());
	} catch (err) {
		// Si hay error imprimo el error en consola
		console.log('Salio mal el Test');
	}
};

// Ejecuto el test
test();*/
