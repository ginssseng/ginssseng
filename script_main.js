$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
				$('.submenu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.main_img');
let t = document.querySelectorAll('.text');

for (let elm of elements) {
  observer.observe(elm);
}
for (let e of t) {
  observer.observe(e);
}
