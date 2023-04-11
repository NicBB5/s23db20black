exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"Jerseys",');
    res.write(' "verbs":["GET", "PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send()
};

module.exports = Jersey;