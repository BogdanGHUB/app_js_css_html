function init()
{

	var text = function makePhrases()
	{
 		var words = [
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
 		];

 		var rand = Math.floor(Math.random() * words.length);
 		var phrase = words[rand] + "" + "!";
 		return phrase;
	}

	document.getElementById('generate_text_bg').onclick = function()
	{
		document.getElementById('text').innerHTML = text();
	};

}
window.onload = init;