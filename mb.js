window.addEventListener("scroll", () => {
	let header = document.querySelector(".header");
	header.classList.toggle("sticky", window.scrollY > 0);
});


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});