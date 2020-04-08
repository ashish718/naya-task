const mongoose = require('mongoose');

const makerScheme = new mongoose.Schema({
	userId:{
		type:String,
		require:true
	},
	capacity:{
		type:Number,
		require:true
	},
	material:{
		type: String,
		require: true
	},

	location:{
		type: String,
		require: true
	}
});

module.exports = mongoose.model('MakerProfile', makerScheme)
