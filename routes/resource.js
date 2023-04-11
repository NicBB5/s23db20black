var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var Jersey_controller = require('../controllers/Jersey');

router.get('/', api_controller.api);


router.post('/Jersey', Jersey_controller.Jersey_create_post);

router.delete('/Jersey/:id', Jersey_controller.Jersey_delete);

router.put('/Jersey/:id', Jersey_controller.Jersey_update_put);

router.get('/Jersey/:id', Jersey_controller.Jersey_detail);

router.get('/Jersey', Jersey_controller.Jersey_list);

module.exports = router;