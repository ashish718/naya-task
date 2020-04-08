const mongoose = require('mongoose');

const designerSchema = new mongoose.Schema({
	userId:{
		type:String,
		require:true
	},
	capacity:{
		type:Number,
		require:true
	},
	designer_type:{
		type: String,
		require: true
	},

	training:{
		type: String,
		require: true
	}
});

module.exports = mongoose.model('DesignerProfile', designerSchema)
