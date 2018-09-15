var util = require('util');
var mysql = require("mysql");
var assert = require("assert");
var services = require('.././bin/www');
const url = require("url");

var mysql_services = services["compose-for-mysql"];

assert(!util.isUndefided(mysql_services), "debe tener un servicio compose-for-mysql");


var credentials  = mysql_services[0].credentials;

var connectionString = credentials.uri;



var mysql = new url.URL(connectionString);
var config = {
	host: mysqlurl.hostname,
    port: mysqlurl.port,
    user: mysqlurl.username,
    password: mysqlurl.password,
    database: 'olimpodb'
};

if (credentials.ca_certificate_base64){
	var ca = new Buffer(credentials.ca_certificate_base64, 'base64');
	config.ssl = { ca: ca };
	config.flags = "--ssl-mode=REQUIRED";
}

module.exports = config;