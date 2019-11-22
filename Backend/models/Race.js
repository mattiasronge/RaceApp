const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: String,
    picture: String,
    where: {
        city: String,
        adress: String
    },
    date: {
        from: String,
        to: String,
        checkin: String,
        checkout: String
    },
    info: String,
    price: Number,

});

module.exports = mongoose.model('Races', PostSchema);