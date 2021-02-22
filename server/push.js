/** @format */

const urlsafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');

const susbcripciones = [];

module.exports.getKey = () => {
	return urlsafeBase64.decode(vapid.publickey);
};

module.exports.addSubscription = (subscription) => {
	susbcripciones.push(subscription);
};
