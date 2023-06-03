const { Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.id });
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res)  {
        try {
            const thought = await Thought.findOne({ _id: req.params.id });
            const words = thought.content;
            await Thought.findOneAndDelete({ _id: req.params.id });
            res.json(`Succesfully deleted thought: ${words}`);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.id });
            // console.log(thought);
            if (!thought) {
                return res.status(404).json({ error: 'Thought not found' });
            }
            thought.reactions.push(req.body);
            await thought.save();
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const thoughtId = req.params.id;
            const reactionId = req.params.reactionId;
            const thought = await Thought.findById(thoughtId);
            if (!thought) {
                return res.status(404).json({ error: 'Thought not found' });
            };
            const reactionIndex = thought.reactions.findIndex(
                (reaction) => reaction.reactionId.toString() === reactionId
            );
            if (reactionIndex === -1) {
                return res.status(404).json({ error: 'Reaction not found' });
            };
            thought.reactions.splice(reactionIndex, 1);
            await thought.save();
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};