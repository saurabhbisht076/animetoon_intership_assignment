const mongoose = require('mongoose');

const webtoonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    characters: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Webtoon', webtoonSchema);