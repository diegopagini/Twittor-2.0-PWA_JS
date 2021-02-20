/** @format */

// Utilizades para grabar PouchDB

const db = new PouchDB('mensajes');

function guardarMensaje(mensaje) {
	mensaje._id = new Date().toISOString();
	db.put(mensaje).then(() => {
		console.log('Mensaje guardado para posterior posteo');
	});
}
