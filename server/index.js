const app = require('./config/express');
const { port, env } = require('./config/config');
//setup-mongoDB
require('./config/mongoose');
app.listen(port, () => {
  console.info(`server started on port ${port} - ${env}`);
});

module.exports = app;
