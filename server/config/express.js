const express = require('express');
const cors = require('cors');
const path = require('path');
// const passport = require('./passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { env } = require('./config');
const routes = require('../routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// app.use(passport.initialize());

// API router
app.use('/api', routes);

// Choose what fronten framework to serve the dist from
// var distDir = '../../dist/';
// if (config.frontend == 'react') {
//   distDir = '../../node_modules/material-dashboard-react/dist';
// } else {
//   distDir = '../../dist/';
// }
// //
// app.use(express.static(path.join(__dirname, distDir)));
// app.use(/^((?!(api)).)*/, (req, res) => {
//   res.sendFile(path.join(__dirname, distDir + '/index.html'));
// });
// console.log(distDir);
//React server
// app.use(
//   express.static(
//     path.join(__dirname, '../../node_modules/material-dashboard-react/dist'),
//   ),
// );
// app.use(/^((?!(api)).)*/, (req, res) => {
//   res.sendFile(path.join(__dirname, '../../dist/index.html'));
// });

module.exports = app;
