const app = require('./config/express');
const { port, env } = require('./config/config');
//setup-mongoDB
require('./config/mongoose');
app.get('/', (req, res) => res.send('Home'));
app.listen(port, () => {
  console.info(`server started on port ${port} - ${env}`);
});
// app.use(async (req, res, next) => {
//   console.log('error');
// });
module.exports = app;
