const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
    },
    img: {
        type: String
    },
    topCast: {
        type: Array
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Movie', movieSchema);
