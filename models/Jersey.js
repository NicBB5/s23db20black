const mongoose = require("mongoose")
const JerseySchema = mongoose.Schema({
    Jersey_type: String,
    size: String,
    Jersey_number: {type: Number, min: 1, max: 99 }
})

module.exports = mongoose.model("Jersey", JerseySchema)