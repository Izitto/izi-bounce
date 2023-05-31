let speed = 40;
let scale = 1;
let canvas;
let ctx;
let logoColor;

let ico = {
    x: 200,
    y: 300,
    xspeed: 5,
    yspeed: 5,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    ico.img.src = 'iz1.png';
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
		
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = logoColor;
        ctx.fillRect(ico.x, ico.y, ico.img.width*scale, ico.img.height*scale);
        ctx.drawImage(ico.img, ico.x, ico.y, ico.img.width*scale, ico.img.height*scale);
        ico.x+=ico.xspeed;
        ico.y+=ico.yspeed;
        border();
        update();   
    }, speed)
}
function border(){
    if(ico.x+ico.img.width*scale >= canvas.width || ico.x <= 0){
        ico.xspeed *= -1;
        pickColor();
    }
        
    if(ico.y+ico.img.height*scale >= canvas.height || ico.y <= 0){
        ico.yspeed *= -1;
        pickColor();
    }    
}
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}