const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('index');
})

app.post('/', function (req, res) {
	console.log(req.body.city);
	res.render('index');
})


app.listen(5000, function() {
	console.log("http://localhost:5000");
})