var express		= require('express');
var bodyParser	= require('body-parser');
var Person		= require('./models/person');
var BO			= require('./bo');

var app = new express();

var port	= process.env.PORT || 8080;
var router	= express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

router.use(function(req, res, next){
	console.log("Something is happening");
	next();
});

router.route('/people')
	.post(function(req, res){
		BO.add(req.body);
		res.json(req.body);
	})
	.get(function(req, res){
		Person.find(function(err, people) {
			if (err)
				res.send(err);
			res.json(people);
		})
	});

router.route('/bears/:bear_id')
	.get(function(req, res){
		console.log(req.params);
		Bear.findById(req.params.bear_id, function(err, bear){
			if (err)
				res.send(err);
			res.json(bear);
		});
	})
	.put(function(req, res){
		Bear.findById(req.params.bear_id, function(err, bear){
			if (err)
				res.send(err);
			bear.name = req.body.name;
			bear.save(function(err){
				if (err)
					res.send(err);
				res.json({ message: 'bear updated!'});
			});
		});
	})
	.delete(function(req, res){
		Bear.remove({_id:req.params.bear_id}, function(err, bear){
			if (err)
				res.send(err);
			res.json({ message: 'bear deleted!'});
		});
	});

app.use('/api', router);
app.listen(port);
console.log('Magic is happening on port ' + port);