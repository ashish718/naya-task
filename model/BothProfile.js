const mongoose = require('mongoose');

const bothSchema = new mongoose.Schema({
	userId:{
		type:String,
		require:true
	},
	capacity:{
		type:Number,
		require:true
	},
timeSpend:{
	type:Number,
	require: true
},
	material:{
		type: String,
		require: true
	},
  designer_type:{
    type:String,
    require:true
  },
  training:{
    type:String,
    require:true
  },
	location:{
		type: String,
		require: true
	}
});

module.exports = mongoose.model('BothProfile', bothSchema)
