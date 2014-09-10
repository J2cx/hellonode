var express		= require('express');
var bodyParser	= require('body-parser');
var mongoose	= require('mongoose');
var Bear		= require('./models/bear');

var app	= express();
mongoose.connect('mongodb://localhost/mydb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port	= process.env.PORT || 8080;
var router	= express.Router();

router.use(function(req, res, next){
	console.log("Something is happening");
	next();
});
router.get("/", function(req, res){
	res.json({message: 'wellcome'});
});
router.route('/bear')
	.post(function(req, res){
		var bear = new Bear();
		console.log(req.body);
		bear.name = req.body.name;
		bear.save(function(err){
			if (err)
				res.send(err);
			res.json({ message: 'Bear Created'});
		});
});

app.use('/api', router);
app.listen(port);
console.log('Magic is happening on port ' + port);

/*app.get('', function(req, res){
	res.send('hello world!');
});

var server = app.listen(3000, function(){
	console.log('listen on port %d', server.address().port);
});*/