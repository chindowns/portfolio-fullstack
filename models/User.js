var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    linkedinUser: String,
    githubUser: String,

    password: {
        type: String,
        validate: [/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/, "Password must be at least 8 characters, number and special"]
    }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
