/** @format */

const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Directorio Público
app.use(express.static(publicPath));

// Rutas
const routes = require('./routes');
app.use('/api', routes);

app.listen(port, (err) => {
	if (err) throw new Error(err);

	console.log(`Servidor corriendo en puerto ${port}`);
});
