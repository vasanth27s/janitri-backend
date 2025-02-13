const express = require('express');
const Patient = require('../Models/Patient');
const User = require('../Models/User');

const router = express.Router();

const verifyUser = async (req, res, next) => {
    try {
        const { username } = req.body;
        const user = await User.findOne({ name: username });
        if (!user) return res.status(401).json({ message: 'Unauthorized access' });
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

router.post('/', verifyUser, async (req, res) => {
    try {
        const { name, admitDate, heartRate, gender, place, age, maintainer } = req.body;
        const newPatient = new Patient({ name, admitDate, heartRate, gender, place, age, maintainer });
        await newPatient.save();
        res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', verifyUser, async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', verifyUser, async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', verifyUser, async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPatient) return res.status(404).json({ message: 'Patient not found' });
        res.json({ message: 'Patient updated successfully', patient: updatedPatient });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', verifyUser, async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) return res.status(404).json({ message: 'Patient not found' });
        res.json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
