const server = require("./server.js");
const config = require("./config.js");

const startServer = async () => {
    try {
        const app = await server( config );
        await app.start();

        console.info(`Server running at http://${ config.host }:${ config.port }`);
    } catch (error) {
       console.error( error );
    }
};

startServer();
