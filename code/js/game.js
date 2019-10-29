// Code du jeu Space Invaders

var canvas = document.getElementById('siCanvas');
var width = canvas.width;
var height = canvas.height;
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0,0,0)';

var fps = 30;
var frameCounter = 0;
var frameTimer = null;

var nbEnemyLines = 5;
var nbEnemyPerLines = 11;
var enemyLines = Array(nbEnemyLines);

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
}


function updateEnnemy() {
    
}

