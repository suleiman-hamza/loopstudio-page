function openMenu() {
     document.getElementById('menu').style.top = '0px'
     document.getElementById('body').style.overflowY = 'hidden'
};

function closeMenu() {
     document.getElementById('menu').style.top = '-100vh'
     document.getElementById('body').style.overflowY = 'visible'
};