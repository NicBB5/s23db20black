var express = require('express');
const Jersey_controllers = require('../controllers/Jersey');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Jersey', { title: 'Search Results Jersey' });
// });

/* router.get('/', Jersey_controllers.Jersey_view_all_Page);
module.exports = router; */

/* router.get('/Jersey/:id', Jersey_controllers.Jersey_detail); */

router.get('/detail', Jersey_controllers.Jersey_view_one_Page);
module.exports = router;
