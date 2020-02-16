/*$(window).scroll(function(){
    $(".middle").stop().animate({ "marginTop": -($(window).scrollTop() + 30) + "px"}, "fast");
});*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
