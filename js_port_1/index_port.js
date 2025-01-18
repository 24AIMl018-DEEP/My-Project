document.addEventListener('scroll', function() {
    var target = window.scrollY;
    var header = document.querySelector('header');
    if (target >= 700) {
        header.classList.add('DisplayNone');
    } else {
        header.classList.remove('DisplayNone');
    }
});
document.addEventListener('scroll', function() {
    var target = window.scrollY;
    var footer = document.querySelector('footer');
    if (target >= 90) {
        footer.classList.add('grey_white');
    } else {
        footer.classList.remove('grey_white');
    }
});
