var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SkillsSchema = new Schema({
    skill: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true,
        enum: ["frontend", "backend"]
    },

});

const Skills = mongoose.model("Skills", SkillsSchema);

module.exports = Skills;