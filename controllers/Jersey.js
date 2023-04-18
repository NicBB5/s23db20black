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
    document.Jersey_number = req.body.Jersey_number;
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


exports.Jersey_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Jersey.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.Jersey_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringqify(req.body)}`)
    try {
        let toUpdate = await Jersey.findById(req.params.id)
        if(req.body.Jersey_type)
            toUpdate.Jersey_type = req.body.Jersey_type;
        if(req.body.size) toUpdate.size = req.body.size;
        if(req.body.Jersey_number) toUpdate.Jersey_number = req.body.Jersey_number;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

exports.Jersey_delete = async function(req, res) {
    console.log("delete" + req.params.id)
    try {
        result = await Jersey.findByIdAndDelete(req.params.id)
        console.log("Removed" + result)
        res.send(result)
    } catch(err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

exports.Jersey_view_one_Page = async function(req, res) {
    console.log("single view for id" + req.query.id)
    try {
        result = await Jersey.findById(req.query.id)
        res.render('Jerseydetail', {title: 'Jersey Detail', toShow: result});
    }
    catch(err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.Jersey_create_Page = function(req,res) {
    console.log("create view")
    try {
        res.render('Jerseycreate', {title: 'Jersey Create'});
    }
    catch (err) {
        res.status(500)
        res.send(`{'error':'${err}'}`);
    }
};

exports.Jersey_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Jersey.findById(req.query.id)
        res.render('Jerseyupdate', {title: 'Jersey Update', toShow: result});
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
