// kluboviController.js
const Klubovi = require('../models/klubovis');

// Create a new club
exports.createKlub = async (req, res) => {
    try {
        const { naziv, adresa, stadion } = req.body;

        const newKlub = new Klubovi({
            naziv,
            adresa,
            stadion
        });

        await newKlub.save();
        res.status(201).json(newKlub);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all clubs
exports.getKlubovi = async (req, res) => {
    try {
        const klubovi = await Klubovi.find().populate('adresa').populate('stadion');
        res.json(klubovi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific club by ID
exports.getKlubById = async (req, res) => {
    try {
        const klub = await Klubovi.findById(req.params.id).populate('adresa').populate('stadion');
        if (!klub) {
            return res.status(404).json({ message: 'Klub not found' });
        }
        res.json(klub);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a club
exports.updateKlub = async (req, res) => {
    try {
        const klub = await Klubovi.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!klub) {
            return res.status(404).json({ message: 'Klub not found' });
        }
        res.json(klub);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a club
exports.deleteKlub = async (req, res) => {
    try {
        const klub = await Klubovi.findByIdAndDelete(req.params.id);
        if (!klub) {
            return res.status(404).json({ message: 'Klub not found' });
        }
        res.json({ message: 'Klub deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};