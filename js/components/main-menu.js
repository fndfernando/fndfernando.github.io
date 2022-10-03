const btnMenu = document.querySelector('.icon-menu');
const Menu = document.querySelector('.menu');


function closeMenu(){
    Menu.style = `display: none;`
}

btnMenu.addEventListener('click',function(){
    Menu.style = `display: flex;`
});

