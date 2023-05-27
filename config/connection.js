const { connect, connection } = require('./models');

connect('mongodb://127.0.0.1:27017/socialNetDB');

module.exports = connection;