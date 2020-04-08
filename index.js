let express = require('express');
let app = express();
let mongoose = require('mongoose');
let dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes
let authRoute = require('./routes/auth')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use(express.json())

//mongo Connect
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true }, ()=>console.log("Db is connected"))


//routes middleware
app.use('/api', authRoute)


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
 }


app.listen(process.env.PORT || 5000, ()=>console.log("port is running on 5000..."))
