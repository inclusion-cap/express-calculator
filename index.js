
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

var StatsD = require('node-dogstatsd').StatsD;
var dogstatsd = new StatsD();

const { calculator } = require('./calculator.helper');

app.get('/:operator/:num1/:num2', function (req, res) {
	dogstatsd.increment('page.views')
	var { operator, num1, num2 } = req.params
	var result = calculator(operator, num1, num2);

	res.json(result);
});

app.get("/", function (req, res) {
	dogstatsd.increment('page.views')
	res.send("hello! add url params like this /:addition/:num1/:num2")
});

//listener
app.listen(PORT, function () {
	console.log("App listening on PORT:" + PORT);
});


/*

ps -aux | grep node
kill -9 [node process number]

*/
