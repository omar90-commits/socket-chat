const socket = io();

const params = new URLSearchParams( window.location.search );

if (!params.has('nombre') || !params.has('sala')) {
	window.location = 'index.html';
	throw Error('El nombre y sala son necesarios.');
}

const usuario = {
	nombre: params.get('nombre'),
	sala: params.get('sala'),
}
		
socket.on('connect', () => {

	console.log('Conectado al servidor');

	socket.emit('entrarChat', usuario, res => console.log(res));
});

// Escuchar
socket.on('disconnect', () => console.log('Perdimos conexion con el servidor'));

// Mensaje a todos
socket.emit('enviarMensaje', {
	mensaje: 'Hola A Todos.',
});

// Escuchar informacion.
socket.on('crearMensaje', mensaje => console.log('Servidor', mensaje));

// Escuchar Cuando un usuario entra y sale del chat.
socket.on('listaPersonas', personas => console.log(personas));

// Mensaje Privado
// socket.emit('mensajePrivado', {
// 	mensaje: 'Hola Victoria.',
// 	para: 'HgMrjPndXDfTxzc8AAAD'
// });

socket.on('mensajePrivado', mensaje => console.log(mensaje));	