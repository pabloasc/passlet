
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Patterns = new Schema(
    {
        userId: { type: String, required: true },
        service: { type: String, required: true },
        pattern: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('patterns', Patterns)