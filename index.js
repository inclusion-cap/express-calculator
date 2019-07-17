
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

const { calculator } = require('./calculator.helper');

app.get('/:operator/:num1/:num2', function (req, res) {
	var { operator, num1, num2 } = req.params
	var result = calculator(operator, num1, num2);

	res.json(result);
});

app.get("/", function (req, res) {
	res.send("hello! travis and heroku")
});

//listener
app.listen(PORT, function () {
	console.log("App listening on PORT:" + PORT);
});


/*

ps -aux | grep node
kill -9 [node process number]

*/
