const mongoose = require('mongoose');
const CarSchema = new mongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    namSX: {
        type: String,
        required: true 
    },
    hang: {
        type: String,
        required: true
    },
    gia: {
        type: String,
        required: true
    }
});

const CarModel = new mongoose.model('car', CarSchema);
module.exports = CarModel;