var mongodb	= require('./mongodb.js');
var Schema		= mongodb.mongoose.Schema;

var PersonSchema = new Schema({
	name : String,
	tel : [String],
	go : String,
	pay : Number,
	ingroup : Boolean
});

module.exports = mongodb.mongoose.model('Person', PersonSchema);