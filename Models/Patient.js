const mongoose = require('mongoose');

const heartRateSchema = new mongoose.Schema({
    time: { type: Date, required: true },
    value: { type: Number, required: true }
});

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    admitDate: { type: Date, required: true },
    heartRate: [heartRateSchema],
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    place: { type: String, required: true },
    age: { type: Number, required: true },
    maintainer: { type: String, required: true }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;

