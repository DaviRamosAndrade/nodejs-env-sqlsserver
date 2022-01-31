const ejs = require("ejs");
const inert = require("@hapi/inert");
const vision = require("@hapi/vision");

const sql = require("./sql");
const auth = require("./auth");

module.exports.register = async server => {
  await server.register( [auth, inert, vision, sql] );
  
  server.views({
    engines: {ejs},
    relativeTo: __dirname,
    path: "../templates",
    layout: true
  });
};
