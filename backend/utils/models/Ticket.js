const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
    description: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    brand: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    model: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    estimatedate: {
        type: String,
        maxlength: 50,
    },
    km: {
        type: Number
    },
    image: {
        type: String,
        minlength: 3,
        maxlength: 250,
        required: true
    },
});

exports.Ticket = mongoose.model('ticket', ticketSchema);