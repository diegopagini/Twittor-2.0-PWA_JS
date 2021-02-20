/** @format */

// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();

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
router.posty('/', function (req, res) {
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

module.exports = router;
