const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

const apiKey = '3e2cf5d377d212d9d1bdf5109a88b672';

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('index');
})

app.post('/', function (req, res) {
	
	let city = req.body.city;
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
	
	request(url, function (error, response, body) {
		if(error) {
			res.render('index', {
				weather: null,
				error: `Error finding temperature for ${city}. Please try again!`
			});
		}
		else {
			let weather = JSON.parse(body);

			if(weather.main === undefined) {
				res.render('index', {
					weather: null,
					error: `Error finding temperature for ${city}. Please try again!`
				})
			}
			else {
				let weatherText = `It's ${weather.main.temp} degree Fahreheit in ${weather.name}`;

				res.render('index', {
					weather: weatherText,
					error: null
				})
			}
		}
	})
})

app.listen(5000, function() {
	console.log("Visit http://localhost:5000 to search for weather in places!");
})