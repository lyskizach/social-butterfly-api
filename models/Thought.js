const { Schema, model } = require('mongoose');
const User = require('./User');

const thoughtSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        createdBy: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User',
            }
        ],
        content: {
            type: String,
            minLength: 15,
            maxLength: 500,
        },
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;