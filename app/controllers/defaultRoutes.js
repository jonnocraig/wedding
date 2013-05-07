
var email   = require("emailjs");
var server  = email.server.connect({
	user:    process.env.GMAIL_USER, 
	password: process.env.GMAIL_KEY, 
	host:    "smtp.gmail.com", 
	ssl:     true
});

exports.info = function (req, res) {
  res.render('pages/information', {
		title: 'Information'
	});
};

exports.gallery = function (req, res) {
  res.render('pages/gallery', {
		title: 'Gallery'
	});
};

exports.video = function (req, res) {
  res.render('pages/video', {
		title: 'Video'
	});
};

exports.invitation = function (req, res) {
  res.render('pages/invitation', {
		title: 'Invitation'
	});
};

exports.accommodation = function (req, res) {
  res.render('pages/accommodation', {
		title: 'Accommodation'
	});
};

exports.registry = function (req, res) {
  res.render('pages/registry', {
		title: 'Registry'
	});
};

exports.rsvp = function (req, res) {
  res.render('pages/rsvp', {
		title: 'RSVP'
	});
};

exports.contact = function (req, res) {
  res.render('pages/contact', {
		title: 'Contact Us'
	});
};

exports.thankyou = function (req, res) {
  res.render('pages/thankyou', {
		title: 'RSVP'
	});
};

var mongoose = require('mongoose'),
    Rsvp = mongoose.model('RSVP');

exports.rsvpResult = function (req, res) {
	//accept result save to db
	var rsvp = new Rsvp(req.body);

	console.log("body", req.body);

	var bodyObj = req.body;

	rsvp.save(function(err, rsvp) {
		if (err) {
			console.log("error", err);
			return false;
		}
		console.log("rsvp saved", rsvp);

		/* send an email */
		var html = "";
		for (var key in bodyObj) {
			if (bodyObj.hasOwnProperty && bodyObj.hasOwnProperty(key)) {
				html += "<p><strong>" + key + "</strong></p>" + "<p>" + bodyObj[key] + "<p>";
				// console.log("key: ", key);
				// console.log("val: ", req.body[key]);
			}
		}
		// send the message and get a callback with an error or details of the message that was sent
		server.send({
			text:    "rsvp: " + JSON.stringify(rsvp), 
			from:    "becky.and.jonno@gmail.com", 
			to:      "Jonathan <jonnocraig@gmail.com>, Rebecca and Jonathan <becky.and.jonno@gmail.com>",
			//cc:      "else <@gmail.com>",
			subject: "<3 xxx Wedding RSVP xxx <3",
			attachment: 
				[
					{data:"<html><h1>RSVP</h1>" + html + "</html>", alternative:true}
				]
		}, function(err, message) { console.log(err || message); });

		res.redirect('/thankyou');
	});
  
};