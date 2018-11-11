const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('index');
})


app.listen(5000, function() {
	console.log("http://localhost:5000");
})