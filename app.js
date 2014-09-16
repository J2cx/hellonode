var express		= require('express');
var bodyParser	= require('body-parser');
var mongoose	= require('mongoose');
var Bear		= require('./models/bear');

var app	= express();
mongoose.connect('mongodb://localhost/mydb');

app.set('views', './views');
app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

var port		= process.env.PORT || 8080;
var router		= express.Router();
var webRouter	= express.Router();

webRouter.use(function(req, res, next){
	console.log("Web request is coming");
	next();
});

webRouter.get("/", function(req, res){
	res.sendFile('hello.html', {root: __dirname });
});
/*
app.get('/test', function(req, res) {
    res.sendFile('hello.html', {root: __dirname })
});*/

router.use(function(req, res, next){
	console.log("Something is happening");
	next();
});

router.get("/", function(req, res){
	res.render('index', {title: 'Jade!'});
});


router.route('/bears')
	.post(function(req, res){
		var bear = new Bear();
		console.log(req.body);
		bear.name = req.body.name;
		bear.save(function(err){
			if (err)
				res.send(err);
			res.json({ message: 'Bear Created'});
		});
	})
	.get(function(req, res){
		Bear.find(function(err, bears) {
			if (err)
				res.send(err);
			res.json(bears);
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
app.use('', webRouter);
app.listen(port);
console.log('Magic is happening on port ' + port);

/*app.get('', function(req, res){
	res.send('hello world!');
});

var server = app.listen(3000, function(){
	console.log('listen on port %d', server.address().port);
});*/