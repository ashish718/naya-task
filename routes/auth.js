let router = require('express').Router();
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

//import model
let User = require('../model/User')
let MProfile = require('../model/MakerProfile')
let DProfile = require('../model/DesignerProfile')
let BProfile = require('../model/BothProfile')

//Maker User Registration
router.post('/makerRegister', async (req, res)=>{

	//user email already exists
	const emailExist = await User.findOne({email: req.body.email})
	if (emailExist) return res.status(400).send("Email Already Exists");

	// //hash the password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	let obj = {
		email: req.body.email,
		password: hashPassword,
		role: req.body.role
	}
	console.log({obj});

	let user = new User(obj);


	try{
		const savedUser = await user.save();

		let makerProfile = await new MProfile({
			userId: savedUser._id,
			capacity: req.body.capacity,
			material: req.body.material,
			location: req.body.location
		})

		const savedProfile = await makerProfile.save()

		res.send(savedProfile);
	}
	catch(err){
		res.status(400).send(err);
	}
});

//Designer Registration

router.post('/designerRegister', async (req, res)=>{

	//user email already exists
	const emailExist = await User.findOne({email: req.body.email})
	if (emailExist) return res.status(400).send("Email Already Exists");

	// //hash the password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	let obj = {
		email: req.body.email,
		password: hashPassword,
		role: req.body.role
	}
	console.log({obj});

	let user = new User(obj);


	try{
		const savedUser = await user.save();

		let designerProfile = await new DProfile({
			userId: savedUser._id,
			capacity: req.body.capacity,
			designer_type: req.body.designer,
			training: req.body.education
		})
		console.log(designerProfile);

		const savedProfile = await designerProfile.save()

		res.send(savedProfile);
	}
	catch(err){
		res.status(400).send(err);
	}
});

//both Registration
router.post('/bothRegister', async (req, res)=>{

	//user email already exists
	const emailExist = await User.findOne({email: req.body.email})
	if (emailExist) return res.status(400).send("Email Already Exists");

	// //hash the password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	let obj = {
		email: req.body.email,
		password: hashPassword,
		role: req.body.role
	}
	console.log({obj});

	let user = new User(obj);


	try{
		const savedUser = await user.save();

		let bothProfile = await new BProfile({
			userId: savedUser._id,
			capacity: req.body.capacity,
			timeSpend:req.body.timeSpend,
			material: req.body.material,
			designer_type: req.body.designer,
			training: req.body.education,
			location:req.body.location
		})
		console.log(bothProfile);
		const savedProfile = await bothProfile.save()

		res.send(savedProfile);
	}
	catch(err){
		res.status(400).send(err);
	}
});

//User Generate Token for login
router.post('/login', async (req, res)=>{

//if email exist
	const user = await User.findOne({email: req.body.email})
	if (!user) return res.status(400).send("Wrong Email Entered");

	//check password is correct
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send("Invalid Password");

	//create and assign token
	let userInfo = {
		id: user._id,
		email: user.email,
		role: user.role
	}

	const token = jwt.sign(userInfo, process.env.TOKEN_SECRET);
	res.send(token);

})

//get user Details

router.get('/maker/:id', async(req, res)=>{

	try{
		const data = await MProfile.find({"userId": req.params.id})
		res.status(200).send(data)
}
catch (error) {
		res.json({message: error});
	}

})

router.get('/designer/:id', async(req, res)=>{

	try{
		const data = await DProfile.find({"userId": req.params.id})
		res.status(200).send(data)
}
catch (error) {
		res.json({message: error});
	}

})

router.get('/both/:id', async(req, res)=>{
	try{
		const data = await BProfile.find({"userId": req.params.id})
		res.status(200).send(data)
}
catch (error) {
		res.json({message: error});
	}
})

module.exports = router;
