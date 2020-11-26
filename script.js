		var quotes = [
 		"Стажировка",
 		"Q-Digital",
 		"Выполнил Богдан Поприк",
 		"Код комментировал",
 		"Вроде получилось неплохо",
 		"Изучаем JavaScript",
 		"CSS",
 		"HTML",
 		"Познал GitHub",
 		"Залил на GitHub"
 		]

function newQuote()
{
	var randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById('text').innerHTML = quotes[randomNumber];
}

