const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const open = document.querySelectorAll('#open');
const close = document.querySelector('#close');

for (var i = 0 ; i < open.length; i++) {
    open[i].addEventListener('click' , event => {
    overlay.style.display = 'flex';
    // overlay.style.opacity = "1";
    setTimeout(() => {
        overlay.style.opacity = "1";
        modal.style.transform = "translateY(0px)";
    }, 10);
    console.log('fff')
});
}
open.onclick = function(event) {
    overlay.style.display = 'flex';
    // overlay.style.opacity = "1";
    setTimeout(() => {
        overlay.style.opacity = "1";
        modal.style.transform = "translateY(0px)";
    }, 10);
    console.log('fff')
}

overlay.addEventListener('click', event => {
    if (event.target === overlay) {
        overlay.style.opacity = "0";
        modal.style.transform = "translateY(-20px)";
        setTimeout(() => overlay.style.display = "none", 300);
    }
});

close.addEventListener('click', event => {
    overlay.style.opacity = "0";
    modal.style.transform = "translateY(-20px)";
    setTimeout(() => overlay.style.display = "none", 300);
});




