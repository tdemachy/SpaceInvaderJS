// Code du jeu Space Invaders

var canvas = document.getElementById('siCanvas');
var width = canvas.width;
var height = canvas.height;
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0,0,0)';

var fps = 30;
var frameCounter = 0;
var frameTimer = null;

var animationCounter = 0;
var animationFactor = 7;

var spriteSheet = new Image();
spriteSheet.src = "img/spritesheet.png";

var nbEnemyLines = 5;
var nbEnemyPerLines = 11;
var enemyLines = Array(nbEnemyLines);

var xSprite = 0;
var xPosition = 0;
var xSpeed = 5;

// Connecter le bouton au redemarrage du jeu
var startBtn = document.getElementById('restart');    
startBtn.addEventListener('click', startGame);

// Lancer le jeu
startGame();

var  r = 0;
// Lancement de la boucle principale du jeu
function startGame(){  
    
    ctx.fillRect(0,0,width,height); 
    if (frameTimer != null)
    {
        clearInterval(frameTimer);
        frameCounter = 0;
    }
    
    frameTimer = window.setInterval(updateGame, 1000/fps);


}

// Boucle principale


function updateGame() {
    frameCounter += 1;
    if (frameCounter % animationFactor == 0)
        animationCounter += 1;

    // Effacer ancien sprite
    ctx.fillRect(xPosition,0,64,64); 

    // Afficher nouveau sprite
    xPosition += xSpeed;

    if (xPosition > width - 64) 
        xSpeed = - xSpeed;

    if (xPosition < 0) 
        xSpeed = - xSpeed;

    // Animation
    if (animationCounter % 2 == 0) 
        xSprite = 0;
    else
        xSprite = 64; 

    ctx.drawImage (spriteSheet, xSprite, 0, 64, 64, xPosition, 0, 64, 64);
}


function updateEnnemy() {
    
}

