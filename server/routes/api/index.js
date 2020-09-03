const router = require('express').Router();
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// options swagger
const swaggerDocs = require('../../config/swagger');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

//config swaggerUI
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Time to document that Express API you built',
      version: '1.0.0',
      description:
        'A test project to understand how easy it is to document and Express API',

      contact: {
        name: 'KhoaPiterrr',
        url: 'https://github.com/khoapiterrr',
        email: 'ltk.gym@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8888/api',
      },
    ],
  },
  apis: [
    './server/models/user.model.js',
    './server/routes/api/user.route.js',
    './server/routes/api/auth.route.js',
  ],
};
const specs = swaggerJsDoc(swaggerOptions);
router.use('/docs', swaggerUI.serve);
router.get('/docs', swaggerUI.setup(specs, { explorer: true }));
/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

router.use('/user', userRoutes);

router.use('/auth', authRoutes);

module.exports = router;
