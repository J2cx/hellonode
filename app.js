var express		= require('express');
var app			= express();
var bodyParser	= require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port	= process.env.PORT || 8080;
var router	= express.Router();

router.get("/", function(req, res){
	res.json({message: 'wellcome'});
});

app.use('', router);
app.listen(port);
console.log('Magic is happening on port ' + port);

/*app.get('', function(req, res){
	res.send('hello world!');
});

var server = app.listen(3000, function(){
	console.log('listen on port %d', server.address().port);
});*/