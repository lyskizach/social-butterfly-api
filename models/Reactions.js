const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        likes: {
            type: Number,
        },
        dislikes: {
            type: Number,
        },
        haha: {
            type: Number,
        },
        love: {
            type: Number,
        }
    }
);

module.exports = reactionSchema;