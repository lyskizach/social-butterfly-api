const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            validate: {
              validator: function(value) {
                // Regular expression pattern to validate email format
                const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                return emailRegex.test(value);
              },
              message: 'Invalid email format',
            },
          },
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
            },
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

userSchema.pre('findOneAndDelete', async function (next) {
    try {
      const user = this;
      await Thought.deleteMany({ username: user.username });
      next();
    } catch (err) {
      next(err);
    }
  });

const User = model('User', userSchema);

module.exports = User;