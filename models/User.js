const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        first: {
            type: String,
            required: true,
            max_length: 50,
        },
        last: {
            type: String,
            required: true,
            max_length: 50,
        },
        thoughts: [
            {
                type: Schema.Types.Object,
                ref: 'Thought',
            },
        ],
        friendList: [
            {
                type: Schema.Types.Object,
                ref: 'User',
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        toObject: { virtuals: true },
    }
);

const User = model('User', userSchema);

module.exports = User;