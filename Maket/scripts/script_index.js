function click__open() {
    var EL = document.getElementById('nav__burger');
    EL.style.right = 0;

    var openBtn = document.getElementById('open');
    openBtn.style.display = "none";

    var closeBtn = document.getElementById('close');
    closeBtn.style.display = "block";
}

function click__close() {
    var EL = document.getElementById('nav__burger');
    EL.style.right = "-200px";

    var openBtn = document.getElementById('open');
    openBtn.style.display = "flex";

    var closeBtn = document.getElementById('close');
    closeBtn.style.display = "none";
}