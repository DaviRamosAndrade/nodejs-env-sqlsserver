module.exports.register = async server => {
  server.route({
    method: "GET",
    path: "/api/events",
    handler: async request => {
      try {
        const db = request.server.plugins.sql.client;
        
        const userId = "user1234";
        const result = await db.events.getEvents(userId);
        
        return result.recordset;
      } catch (error) {
        console.error(error);
      }
    }
  });
}
