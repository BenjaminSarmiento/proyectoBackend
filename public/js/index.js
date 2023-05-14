const socket = io(); //instancia el socket y lo guarda en la constante "socket"
socket.emit("message", "hola, me estoy comunicando desde websocket")

socket.on("evento_para_socket_individual", data=>{
    console.log(data);
})

socket.on("evento_para_todos_menos_para_el_socket_actual", data=>{
    console.log(data);
})

socket.on("evento_para_todos", data=>{
    console.log(data);
})

