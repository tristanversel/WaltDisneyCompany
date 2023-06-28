const liensNav = document.getElementsByClassName('navItem');
var headerAffiche = false;

const mousePosText = document.getElementById('mouse-pos');
let mousePos=0;

window.addEventListener('mousemove', (event) => {
  mousePos = event.clientY;
});


document.getElementById("header").addEventListener("mouseover", ()=>{
    document.getElementById('logo').style.filter = 'invert(1)';
    document.getElementById('menu').style.filter = 'invert(1)';
    for (var i = 0; i < liensNav.length; i++) {
        liensNav[i].style.color = 'rgb(100,100,100)';
    }
    document.getElementById("header").style.backgroundColor='white';
})

document.getElementById("header").addEventListener("mouseleave", ()=>{
    if(window.scrollY <= (window.innerHeight/4)){
        document.getElementById('logo').style.filter = 'invert(0)';
        document.getElementById('menu').style.filter = 'invert(0)';
        for (var i = 0; i < liensNav.length; i++) {
            liensNav[i].style.color = 'white';
        }
        document.getElementById("header").style.backgroundColor='transparent';
        document.getElementById("header").style.boxShadow='none';
    }
})

function affiche(){
 
    document.getElementById('logo').style.filter = 'invert(1)';
    document.getElementById('menu').style.filter = 'invert(1)';
    for (var i = 0; i < liensNav.length; i++) {
        liensNav[i].style.color = 'rgb(100,100,100)';
    }
    document.getElementById("header").style.backgroundColor='white';
}

function retire(){
   
    document.getElementById('logo').style.filter = 'invert(0)';
    document.getElementById('menu').style.filter = 'invert(0)';
    for (var i = 0; i < liensNav.length; i++) {
        liensNav[i].style.color = 'white';
    }
    document.getElementById("header").style.backgroundColor='transparent';
    document.getElementById("header").style.boxShadow='none';
}

window.addEventListener("scroll", ()=>{
    console.log(mousePos);
    if(headerAffiche==false){
        if(window.scrollY > (window.innerHeight/4)){
            affiche();
            headerAffiche=true;
        }
    }else{
        if(window.scrollY <= (window.innerHeight/4)){
            retire();
            headerAffiche=false;
        }
    }
})

document.getElementById("menu").addEventListener("click", ()=>{
    document.getElementById('menuBurger').classList.remove('animClose');
    document.getElementById('menuBurger').classList.add('animOpen');
    document.getElementById("menuBurger").style.display = "flex";
});

document.getElementById("menuOpen").addEventListener("click", ()=>{
    document.getElementById('menuBurger').classList.add('animClose');
    document.getElementById('menuBurger').classList.remove('animOpen');
    setTimeout(()=>{ 
        document.getElementById("menuBurger").style.display = "none";
    }, 799);
});

