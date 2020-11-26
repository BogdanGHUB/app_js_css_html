var quotes = [
 	"Стажировка.",
 	"Q-Digital.",
 	"Выполнил Богдан Поприк.",
 	"Код комментировал.",
 	"Вроде получилось неплохо.",
 	"Изучаем JavaScript.",
 	"CSS.",
 	"HTML.",
 	"Познал GitHub.",
 	"Залил на GitHub."
 ]

	function newQuote()
{
	var randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById('text').innerHTML = quotes[randomNumber];
}

var color = [
 	"color1",
 	"color2",
 	"color3",
 	"color4",
 	"color5",
 	"color6",
 	"color7",
 	"color8",
 ]
 
function colorbg()
{
	var randomcolor = Math.floor(Math.random()*(color.length));
	document.getElementById('wrapper').className = color[randomcolor];
}

