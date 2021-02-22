/** @format */

const fs = require('fs');
const urlsafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');

const webpush = require('web-push');

webpush.setVapidDetails(
	'mailto:diegopaginidev@gmail.com',
	vapid.publickey,
	vapid.privateKey
);

const susbcripciones = require('./subs-db.json');

module.exports.getKey = () => {
	return urlsafeBase64.decode(vapid.publickey);
};

module.exports.addSubscription = (subscription) => {
	susbcripciones.push(subscription);

	fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(susbcripciones));
};

module.exports.sendPush = (post) => {
	susbcripciones.forEach((subs, i) => {
		webpush.sendNotification(subs, JSON.stringify(post));
	});
};
