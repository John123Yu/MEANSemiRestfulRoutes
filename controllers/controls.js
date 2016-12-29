var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	showall: function(req, res){
       User.find({}, null, {sort: 'created_at'}).exec(function(err, users) {
      	return res.json(users)
        });
	},
	create: function(req, res){
      var user = new User(req.body);
      user.save(function(err) {
	    if(err) {
	      console.log('Error with creating new user');
	    } else {
	      console.log('successfully added a new user!');
	    }
	})
    },
    delete: function(req, res){
      User.remove({_id: req.params.id}, function(err, users) {
        if(err) {
          console.log('something went wrong THERE');
        } else {
          console.log('successfully removed a user!');
        }
      })
	  },
    show1: function(req, res){
      User.find({_id: req.params.id}, function(err, users) {
      if(err) {
        console.log('something went wrong WHERE');
      } else { 
        console.log('success gettin user');
        return res.json(users[0])
      }
    })
  },
  	edit: function(req, res){
     User.update({_id: req.params.id}, {firstName: req.body.firstName, lastName: req.body.lastName, birthday: req.body.birthday}, function(err, users) {
        if(err) {
          console.log('something went wrong THERE');
        } else {
          console.log('successfully edited a user!');
        }
      })
	 }
};

	