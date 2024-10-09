const express = require('express');
const Webtoon = require('../models/Webtoon');
const router = express.Router();

// Fetch all webtoons
router.get('/', async (req, res) => {
    try {
        const webtoons = await Webtoon.find();
        res.json(webtoons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new webtoon
router.post('/', async (req, res) => {
    const { title, summary, characters } = req.body;
    if (!title || !summary) {
        return res.status(400).json({ message: 'Title and summary are required.' });
    }

    const newWebtoon = new Webtoon({ title, summary, characters });
    try {
        const savedWebtoon = await newWebtoon.save();
        res.status(201).json(savedWebtoon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Fetch a specific webtoon by ID
router.get('/:id', async (req, res) => {
    try {
        const webtoon = await Webtoon.findById(req.params.id);
        if (!webtoon) return res.status(404).send('Webtoon not found');
        res.json(webtoon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a webtoon by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedWebtoon = await Webtoon.findByIdAndDelete(req.params.id);
        if (!deletedWebtoon) return res.status(404).send('Webtoon not found');
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;