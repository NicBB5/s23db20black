var Jersey = require('../models/Jersey');

exports.Jersey_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Jersey list');
};

exports.Jersey_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Jersey detail: ' + req.params.id);
};

exports.Jersey_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Jersey create POST');
};

exports.Jersey_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Jersey delete DELETE ' + req.params.id);
};

exports.Jersey_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Jersey update PUT' + req.params.id);
};