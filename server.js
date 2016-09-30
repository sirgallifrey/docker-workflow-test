'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.register([{
	register: require('./connections/mongo')
}], (err) => {
	if (err) {
		throw err;
	}
	console.log(`Server running at: ${server.info.uri}`);
});
