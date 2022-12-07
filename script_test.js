$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
				$('.submenu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

var result = 0;
var inputNum = document.querySelector(".v1");

function correct_answer(btn){
  btn.style.background = "#5EB97D";
  btn.style.color = "white";
  if (result < 5) {
    result = result + 1;
  }
  inputNum.value = result;
}
function wrong_answer(btn){
  btn.style.background = "#EB6465";
  btn.style.color = "white";
}

var but1 = document.querySelector(".button11");
var but2 = document.querySelector(".button22");
var but3 = document.querySelector(".button33");
var but4 = document.querySelector(".button44");
var but5 = document.querySelector(".button52");

but1.onclick = function(){
  correct_answer(but1);
};
but2.onclick = function(){
 correct_answer(but2);
};
but3.onclick = function(){
 correct_answer(but3);
};
but4.onclick = function(){
 correct_answer(but4);
};
but5.onclick = function(){
 correct_answer(but5);
};

var wbut1 = document.querySelectorAll(".button1");
var wbut2 = document.querySelectorAll(".button2");
var wbut3 = document.querySelectorAll(".button3");
var wbut4 = document.querySelectorAll(".button4");
var wbut5 = document.querySelectorAll(".button5");
for (var j = 0; j < wbut1.length; j++){
  wbut1[j].onclick = function(){
    for (var i = 0; i < wbut1.length; i++) {
      wrong_answer(wbut1[i]);
    }
  document.querySelector(".button11").style.background = "#5EB97D";
  document.querySelector(".button11").style.color = "white";
  };
}
for (var j = 0; j < wbut2.length; j++){
  wbut2[j].onclick = function(){
    for (var i = 0; i < wbut2.length; i++) {
      wrong_answer(wbut2[i]);
    }
  document.querySelector(".button22").style.background = "#5EB97D";
  document.querySelector(".button22").style.color = "white";
  };
}
for (var j = 0; j < wbut3.length; j++){
  wbut3[j].onclick = function(){
    for (var i = 0; i < wbut1.length; i++) {
      wrong_answer(wbut3[i]);
      document.querySelector(".button33").style.background = "#5EB97D";
      document.querySelector(".button33").style.color = "white";
    }

  };
}
for (var j = 0; j < wbut4.length; j++){
  wbut4[j].onclick = function(){
    for (var i = 0; i < wbut4.length; i++) {
      wrong_answer(wbut4[i]);
    }
  document.querySelector(".button44").style.background = "#5EB97D";
  document.querySelector(".button44").style.color = "white";
  };
}
for (var j = 0; j < wbut5.length; j++){
  wbut5[j].onclick = function(){
    for (var i = 0; i < wbut5.length; i++) {
      wrong_answer(wbut5[i]);
    }
  document.querySelector(".button52").style.background = "#5EB97D";
  document.querySelector(".button52").style.color = "white";
  };
}
