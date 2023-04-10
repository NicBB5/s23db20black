const mongoose = require("mongoose")
const JerseySchema = mongoose.Schema({
    Jersey_type: String,
    size: String,
    Jersey_number: Number
})

module.exports = mongoose.model("Jersey", JerseySchema)