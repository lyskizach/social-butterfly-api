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
                { $set: req.body } ,
                { runValidators: true, new: true }
            )
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
};