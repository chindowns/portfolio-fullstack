var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const JobHistorySchema = new Schema({
    companyName: {
        type: String,
        required: [true, "Company is Required"],
        trim: true
    },
    jobTitle: {
        type: String,
        required: [true, "Job Title is Required"],
        trim: true
    },
    startDate: {
        type: Date,
        required: [true, "Start Date is Required"],
        trim: true
    },
    endDate: {
        type: Date,
        required: false,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 2
    },

    accomplishments1: {
        type: String,
        required: true
    },

    accomplishments2: {
        type: String,
        required: false
    },

    accomplishments3: {
        type: String,
        required: false
    },

    accomplishments4: {
        type: String,
        required: false
    }

});

const JobHistory = mongoose.model("JobHistory", JobHistorySchema);

module.exports = JobHistory;