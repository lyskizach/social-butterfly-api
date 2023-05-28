const { Schema, model } = require('mongoose');
const { Thought } = require('./Thought');

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
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        // friends: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User',
        //     }
        // ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const User = model('User', userSchema);

module.exports = User;