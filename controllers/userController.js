const { User } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id });
            if(!user) {
                res.status(400).json(`No user found with that ID`);
            };
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const username = await User.findOne({ _id: req.params.id });
            const name = username.first + ' ' + username.last;
            await User.findOneAndDelete({ _id: req.params.id });
            res.json(`Deleted ${name}`);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const userId = req.params.id;
            // console.log(userId);
            const friendId = req.params.friendId;
            // console.log(friendId);
            const user = await User.findOne({ _id: userId });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
             // Check if the friendId is already in the user's friend list
            const isFriend = user.friends.includes(friendId);
            if (isFriend) {
                // Friend already exists in the user's friend list
                return res.status(400).json({ error: 'Friend already exists' });
            }
            user.friends.push(friendId);
            await user.save();
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const userId = req.params.id;
            const friendId = req.params.friendId;
            const user = await User.findOne({ _id: userId });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            const friendIndex = user.friends.indexOf(friendId);
            if (friendIndex === -1) {
                return res.status(404).json({ error: 'Friend not found' });
            }
            user.friends.splice(friendIndex, 1);
            await user.save();
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};