const mongoose = require('mongoose')

const vegSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required:true
    },
    energyKcal: {
        type: Number,
        required: true
    },
    carbohydrate: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    vegType: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Veg', vegSchema)