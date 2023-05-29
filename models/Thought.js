const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reactions');

const thoughtSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        // thoughtId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },
        content: {
            type: String,
            minLength: 15,
            maxLength: 500,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        toObject: { virtuals: true },
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;