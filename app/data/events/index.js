const utils = require("../utils");

const register = async ({sql, getConnection}) => {
    const sqlQueries = await utils.loadSQLQueries("events");

    const getEvents = async userId => {
        const conn = await getConnection();
        const request = await conn.request();

        request.input("userId", sql.VarChar(50), userId);

        return request.query(sqlQueries.getEvents);
    }

    return { getEvents };
};

module.exports = { register }
