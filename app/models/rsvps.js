
/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * RSVP Schema
 */

var RSVPSchema = new Schema({
  fullName: { "type": String, "default" : '', "trim" : true },
  partnersName: { "type" : String, "default" : '', "trim" : true },
  rsvp: { "type" : String, "default": ''},
  dietaryRequirements: { "type" : String, "default" : ''},
  partnerDietaryRequirements: { "type" : String, "default" : ''},
  anythingToAdd: { "type" : String, "default" : '', "trim" : true },
  createdAt  : { "type" : Date, "default" : Date.now }
});



mongoose.model('RSVP', RSVPSchema);
