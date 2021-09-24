const express = require('express');
const router = express.Router();

const kurisuController = require('../app/controllers/KurisuController');

router.use('/:slug', kurisuController.show);
router.use('/', kurisuController.index);

module.exports = router;
