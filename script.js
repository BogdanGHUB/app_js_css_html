//ПЕРЕМЕННЫЕ
let generate = document.getElementById('generate_text_bg');
let clear = document.getElementById('clear');
let color_wrapper = document.getElementById('wrapper');
let text = document.getElementById("text");

//МАССИВЫ

let textRandom = [
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
];

let randomColorBgText = [
   "color1",
   "color2",
   "color3",
   "color4",
   "color5",
   "color6"
];

//ГЕНЕРАЦИЯ РАНДОМНОГО ЦВЕТА ФОНА И ТЕКСТА

Array.prototype.randomColor = function ()
{
   return this[Math.floor(Math.random() * this.length)]
};

Array.prototype.randomText = function () 
{
   return this[Math.floor(Math.random() * this.length)]
};

generate.addEventListener('click', function () 
{
   let TwoRandomColor = randomColorBgText.randomColor();
   let TwoRandomText = textRandom.randomText();

   color_wrapper.classList.remove("color1", "color2", "color3", "color4", "color5", "color6");
   color_wrapper.classList.add(TwoRandomColor);
   text.classList.remove("color1", "color2", "color3", "color4", "color5", "color6");
   text.classList.add(TwoRandomColor);

   text.innerHTML = TwoRandomText;
   text.insertAdjacentElement('afterbegin', text);
});

//УДАЛЕНИЕ КЛАССОВ ТЕКСТА И ФОНА

clear.addEventListener('click', function ()
{
   color_wrapper.classList.remove("color1", "color2", "color3", "color4", "color5", "color6");
   text.innerHTML = '';
})