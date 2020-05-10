var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "PLease enter a valid email address"]
    },

    phone: {
        type: String,
        validation: [/\d{3}-\d{3}-\d{4}/, "Please enter the following format ###-###-####"]
    },
    
    city: String,
    state: String,
    linkedinResume: String,
    githubResume: String,
});

const Resume = mongoose.model("Resume", ResumeSchema);

module.exports = Resume;
