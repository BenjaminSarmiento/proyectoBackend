const socket = io(); //instancio socket
    

const render = async (data) => {
	const html = document.getElementById('listOfProducts');
	html.innerHTML = '';
	await data.forEach((element) => {
		const elementHtml = document.createElement('div');
		elementHtml.innerHTML = ` <h2>${element.title}</h2>
    <p>${element.description}</p>
    <p>${element.code}</p>
    <p>${element.price}</p>
    <p>${element.stock}</p>
    <p>${element.category}</p>
    ${element.thumbnail ? `<p>${element.thumbnail}</p>` : ''}
    `;
		html.appendChild(elementHtml);
	});
};
socket.on('product_list', (data) => {
	render(data);
});
socket.on('product_list_updated', (data) => {
	render(data);
});









/*let user;
const inputMSJ = document.getElementById("message");

swal.fire({
    title: "BIENVENIDO",
    input: "text",
    text: "Nombre y apellido",
    icon:"success",
    inputValidator: (value) =>{
        return !value &&    "Se requiere identificacion"
    },
    allowOutsideClick: false,
}) .then((result)=> {
    user = result.value;
    socket.emit("sayhello", user)
});

function render(data) {
	// Genero el html
	const html = data
		.map((elem, index) => {
			// Recorro el array de mensajes y genero el html
			return `<div>
            <strong>${elem.user}:</strong>
                <em>${elem.msj}</em>
            </div>`;
		})
		.join(' '); // Convierto el array de strings en un string

	// Inserto el html en el elemento con id messages
	document.getElementById('messages').innerHTML = html;
}

inputMSJ.addEventListener("keyup", event => {
    if (event.key === "Enter"){
        let msj = inputMSJ.value;
        if (msj.trim().length > 0) {
            socket.emit("message", {user, msj})
            inputMSJ.value = "";
        }
    }
})

socket.on("messages", data => {
    render(data);
})

socket.on("connected", (data) => {
    Swal.fire({
        text: `se conecto ${data}`,
        toast: true,
        position: "top-right",
    })
})

const render = async (data) => {
	const html = document.getElementById('listOfProducts');
	html.innerHTML = '';
	await data.forEach((element) => {
		const elementHtml = document.createElement('div');
		elementHtml.innerHTML = ` <h2>${element.title}</h2>
    <p>${element.description}</p>
    <p>${element.code}</p>
    <p>${element.price}</p>
    <p>${element.stock}</p>
    <p>${element.category}</p>
    ${element.thumbnail ? `<p>${element.thumbnail}</p>` : ''}
    `;
		html.appendChild(elementHtml);
	});
};

socket.on('product_list', (data) => {
	render(data);
});
socket.on('product_list_updated', (data) => {
	render(data);
});*/





/*socket.emit("message", "hola, me estoy comunicando desde websocket")

socket.on("evento_para_socket_individual", data=>{
    console.log(data);
})

socket.on("evento_para_todos_menos_para_el_socket_actual", data=>{
    console.log(data);
})

socket.on("evento_para_todos", data=>{
    console.log(data);
})*/

