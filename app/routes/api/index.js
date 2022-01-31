const events = require("./events.js");

module.exports.register = async server => {
  await events.register(server);
}
