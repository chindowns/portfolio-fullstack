var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true
    },

    repoLink: {
        type: String,
        required: true,
    },

    deployLink: {
        type: String,
        required: true,
    },

    projectRole: {
        type: String,
        required: true
    },

    technologiesUsed: {
        type: Array,
        required: true
    },

    appDesc: {
        type: String,
        validate: [({length}) => length <= 72,"Description must be less than 72 characters"]
    },

    projHighlights: String,

    projReqponsibilities: String,

    projLearnings: String
});

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;