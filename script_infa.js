$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
				$('.submenu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

var text1 = '"Ничего не понимаю... Я мою руки полчаса, а ощущение, будто они всё равно грязные!"';
var id1 = "quote1";
var text2 = '"Я же не подхожу ни по одному параметру... Тогда, конечно, не красавица."';
var id2 = "quote2";
var text3 = '"Силы небесные! Если вам небезразлична судьба искусства, сделайте так, чтобы я оказался в полном одиночестве!"';
var id3 = "quote3";
var text4 = '"Честное слово, не понимаю, как это происходит! Я собираюсь попробовать совсем капельку, а потом не могу остановиться."';
var id4 = "quote4";
function compilate(id, text){
  var i = 0;
  var txt = text; /* Текст */
  var speed = 60; /* Скорость/длительность эффекта в миллисекундах */
  var elem = document.getElementById(id);

  function typeWriter() {
    if (i < txt.length) {
      elem.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       typeWriter();
      }
    });
  }

  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  observer.observe(elem);
}
compilate(id1, text1);
compilate(id2, text2);
compilate(id3, text3);
compilate(id4, text4);
