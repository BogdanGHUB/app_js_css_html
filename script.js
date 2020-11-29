//Рандомный текст

var text = [
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

	function randomText()
{
	var randomNumber = Math.floor(Math.random()*(text.length));
	document.getElementById('text').innerHTML = text[randomNumber];
}

//Рандомный цвет фона

var color = [
 	"color1",
 	"color2",
 	"color3",
 	"color4",
 	"color5",
 	"color6"
 ]

function colorbg()
{
	var randomcolor = Math.floor(Math.random()*(color.length));
	document.getElementById('wrapper').className = color[randomcolor];
}

// Очистить текст (получилось не так как нужно по заданию)

	function reset()
{	
	let paragraph = document.getElementById('text');
	paragraph.textContent = '';
}

// Очистить фон не получилось