const events = require("./events");
const sql = require("mssql");

const client = async (server, config) => {
    let pool = null;

    const closePool = async () => {
        try{
            await pool.close();
            pool = null;
        } catch (error) {
            pool = null;
            console.error(error);
        }
    }

    const getConnection = async () => {
        try{
            if(pool) {
                return pool;
            }

            pool = await sql.connect(config);
            pool.on("error", async err => {
                console.error(err);
                await closePool();
            });

            return pool;

        } catch (error) {
            pool = null;
            console.error(error);
        }
    }

    return {
        events: await events.register({sql, getConnection})
    }
};

module.exports = client;
