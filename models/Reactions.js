const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
);

// Define a virtual getter for formatted timestamp
reactionSchema.virtual('formattedCreatedAt').get(function() {
    return this.createdAt.toLocaleString();
});

// const reaction = await reactionSchema.findById(reactionId);
// console.log(reaction.formattedCreatedAt);

module.exports = reactionSchema;