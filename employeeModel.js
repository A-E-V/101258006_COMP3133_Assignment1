const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-Binary', 'Other', 'Prefer not to say'],
        required: true,
        set: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    },
    salary: {
        type: Number,
        required: true
    }
});
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;