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
    } else if (this.width < 1000) {
        radius = radius - this.width / 3.7;
    }
    var fonts = ['Courier New', 'Impact', 'Palatino Linotype'];
    ['f|__', 'f___', 'fu__', 'fu|_', 'fu|_', 'fun_', 'fun|', 'fun_', 'func_', 'func|', 'func'].forEach(function(str, i, arr) {
        this.setTimeout(() => {
            center.innerHTML = str;
            center.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
            if (i == arr.length - 1) {
                center.style.fontFamily = fonts[1];
                setInterval(() => {
                    center.innerHTML = center.innerHTML == 'func' ? 'func|' : 'func'; 
                }, 800);
            }
        }, 200 * i);
    });
    setInterval(() => {
        age.innerHTML = ((new Date().getTime()-1058832000000)/3600000/24/365).toFixed(10) + " years ";
        if (!this.mouseOver) {
            angle = angle > Math.PI * 2 * 300 ? 0 : angle + 1;
            logos.forEach(function(logo, i, arr) {
                logo.style.left = width - center.clientWidth - logo.clientWidth/2 + Math.cos(angle/300 + i*2*Math.PI/3) * radius + 'px';
                logo.style.top = height - center.clientHeight + dHeight - logo.height/2 + Math.sin(angle/300 + i*2*Math.PI/3) * radius + 'px';
            });
        } 
    }, 5);
}

function changeLogo(logo, opacity, border, boxshadow) {
    logo.style.opacity = opacity + '%';
    logo.style.border = border + 'px solid white';
    logo.style.boxshadow = '0 0 ' + boxshadow;
    mouseOver = !mouseOver;
}

function increaseLogo(logo) {
    changeLogo(logo, 70, 10, 40, 'px #efefef');
}

function reduceLogo(logo) {
    changeLogo(logo, 100, 0, 0, 'px #white');
}