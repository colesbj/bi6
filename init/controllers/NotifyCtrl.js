var PillModel = require("../models/pill.js"); 

// POST localhost:3000/notify
exports.sendNotification = function(req, res, next){
	if(req.body.notifyNumber){
		// Your accountSid and authToken from twilio.com/user/account
		var accountSid = 'ACe47465cf820637c1a8d4d9feb6c3df08';
		var authToken = "da0848bdeeb77e538927ba0203af4d1f";
		var client = require('twilio')(accountSid, authToken);

		var greeting ;
		date = new Date;
		h = date.getHours();
	    if(h<11) greeting = 'Good morning' ;
	    else if(h>16) greeting = 'Good evening' ;
	    else greeting = 'Good afternoon';

	    if (req.body.specialInstructions)

		var message = greeting + ' ' + req.body.userName + ', ' + req.body.dosage + ' pills of your ' + req.body.pillName + ' medication has been dispensed!';
		var to = '+1' + req.body.notifyNumber ;

		console.log(to) ;
		client.messages.create({
			    body: message,
			    to: to,
			    from: '+12044000262'
		}, function(err, data) {
			    if (err) return next(err);
			    return res.send(data)
		});
	}
}
