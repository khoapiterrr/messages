const router = require('express').Router();

router.get('/status', (req, res) => res.send('oke baby!'));

module.exports = router;
