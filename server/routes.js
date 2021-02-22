/** @format */

// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const push = require('./push');

const mensajes = [
	{
		_id: 'XXX',
		user: 'spiderman',
		mensaje: 'Hola Mundo',
	},
	{
		_id: 'XXX',
		user: 'ironman',
		mensaje: 'Hola Mundo',
	},
	{
		_id: 'XXX',
		user: 'hulk',
		mensaje: 'Hola Mundo',
	},
];

// Get mensajes
router.get('/', function (req, res) {
	// res.json('Obteniendo mensajes');
	res.json(mensajes);
});

// Post mensajes
router.post('/', function (req, res) {
	const mensaje = {
		mensaje: req.body.mensaje,
		user: req.body.user,
	};

	mensajes.push(mensaje);

	console.log(mensajes);

	res.json({
		ok: true,
		mensaje: mensaje,
	});
});

// Almacenar la subscripción
router.post('/subscribe', (req, res) => {
	res.json('subscribe');
});

router.get('/key', (req, res) => {
	const key = push.getKey();

	res.send(key);
});

// Enviar una notificacion push a la spersonas que nosostros queramos
// Es algo qeu se controla del lado del server
router.post('/push', (req, res) => {
	res.json('key publico');
});

module.exports = router;
