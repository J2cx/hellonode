var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tenyears');
exports.mongoose = mongoose;