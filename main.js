var mouseOver = false;
var width = window.innerWidth / 2;
var height = window.innerHeight / 2;

window.onload = function() {
    var logos = [
        document.getElementById("github"),
        document.getElementById("vk"),
        document.getElementById("yummyanime"),
    ];
  
    var center = document.getElementById("center");
    logos.forEach(function(logo, i, arr) {
        logo.style.position = 'absolute';
    });
    var angle = 0;
    var age = document.getElementById("age");
    var radius = 500;
    var dHeight = 0;
    if (this.width < 550) {
        radius = 100;
        dHeight = this.height/3;
    }
    ['f|__', 'f___', 'fu__', 'fu|_', 'fu|_', 'fun_', 'fun|', 'fun_', 'func', 'func|', 'func'].forEach(function(str, i, arr) {
        this.setTimeout(() => {
            center.innerHTML = str;
        }, 200 * i);
    });
    setInterval(() => {
        age.innerHTML = ((new Date().getTime()-1058832000000)/3600000/24/365).toFixed(10) + " лет";
        if (!this.mouseOver) {
            angle = angle > 100000000 ? 0 : angle + 1;
            logos.forEach(function(logo, i, arr) {
                logo.style.left = width - center.clientWidth - logo.clientWidth/2 + Math.cos(angle/99 + (i + 1) * 2) * radius + 'px';
                logo.style.top = height - center.clientHeight + dHeight - logo.height/2 + Math.sin(angle/99 + (i + 1) * 2) * radius + 'px';
            });
        } 
    }, 5);
};

function changeLogo(logo, opacity, border, boxshadow) {
    logo.style.opacity = opacity + '%';
    logo.style.border = border + 'px solid white';
    logo.style.boxshadow = '0 0 ' + boxshadow;
    mouseOver = !mouseOver;
}

function increaseLogo(logo) {
    changeLogo(logo, 80, 3, 40, 'px #efefef');
};

function reduceLogo(logo) {
    changeLogo(logo, 100, 0, 0, 'px #white');
};