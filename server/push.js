/** @format */

const urlsafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');

module.exports.getKey = () => {
	return urlsafeBase64.decode(vapid.publickey);
};
