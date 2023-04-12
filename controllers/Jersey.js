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

exports.Jersey_list = async function(req, res) {
    try {
        theJersey = await Jersey.find();
        res.send(theJersey);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.Jersey_view_all_Page = async function(req, res) {
    try {
        console.log("hi")
        theJersey = await Jersey.find();
        res.render('Jersey', {title: 'Jersey Search Results', results:theJersey});
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.Jersey_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Jersey();
    document.Jersey_type = req.body.Jersey_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};