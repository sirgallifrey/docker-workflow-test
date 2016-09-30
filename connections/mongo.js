'use strict';

const MongoClient = require('mongodb').MongoClient;
const Hoek = require('hoek');

exports.register = function(server, options, next) {

	//for now lets just hardcode everything

	MongoClient.connect('mongodb://mongo:27017/mydb', (err, db) => {

		Hoek.assert(err === null, err);

		server.decorate('server', 'mongoDB', db);

		next();
	});

};

exports.register.attributes = {
	name: 'app-mongodb-connection',
	version: '0.0.0'
};
