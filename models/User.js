const { Schema, model } = require('./models');
const { Thought } = require('./Thought');

const userSchema = new Schema(
    {
        first: String,
        last: String,
        age: Number,
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
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