var Person = require('./models/person');

exports.add = function(person, callback){
	var one = Person();
	one.name = person.name;
	one.tel = person.tel;
	one.go = person.go;
	one.save(function(err){
		if (err) console.log(err);
		console.log('created');
	});
}