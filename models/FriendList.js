const { Schema } = require('mongoose');

const friendListSchema = new Schema(
    {
        name: [
            {
                type: Schema.Types.Object,
                ref: 'User',
            },
        ],
    }
);

module.exports = friendListSchema;