const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;


let UserSchema = new Schema({
    username: String,
    email: String,
    lastName:String,
    number:Number
});


UserSchema.plugin(timestamps);
mongoose.model('User', UserSchema)