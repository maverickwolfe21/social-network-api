const { connect, connection } = require("mongoose");


//mongodb connection
connect("mongodb://127.0.0.1:27017/social-network");

// Export connection
module.exports = connection;
