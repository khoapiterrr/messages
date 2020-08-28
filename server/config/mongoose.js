const mongoose = require('mongoose');
// connect to mongo db
const { mongo } = require('./config');
console.log(mongo.uri);
// set mongoose Promise to Bluebird
mongoose.Promise = Promise;
// connect to mongo db
// mongoose.connect(mongoUri, { keepAlive: 1 });
mongoose
  .connect(mongo.uri, {
    useCreateIndex: true,
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('mongoDB connected...'));
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongo.uri}`);
});

// print mongoose logs in dev env
// if (config.MONGOOSE_DEBUG) {
//   mongoose.set('debug', (collectionName, method, query, doc) => {
//     debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
//   });
// }
