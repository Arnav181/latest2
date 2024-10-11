const mongoose = require("mongoose");
function createConnection(url) {
  mongoose.createConnection(url);
}

module.exports = {
  createConnection,
};
