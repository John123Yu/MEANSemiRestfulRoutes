var mongoose = require('mongoose');
var User = mongoose.model('User');
var user = require('../controllers/controls.js');

module.exports = function(app) {
app.get('/users',function(req, res){
       user.showall(req,res)
    });

app.post('/user',function(req, res){
	console.log(req.body)
      user.create(req, res)
});

app.delete('/user/:id',function(req, res){
	user.delete(req,res)
});

app.get('/user/:id',function(req, res){
  user.show1(req,res)
});

app.put('/user/:id',function(req, res){
	user.edit(req,res)
});
}

