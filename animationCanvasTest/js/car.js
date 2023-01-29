const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 640;
const CANVAS_HEIGHT = canvas.height = 640;
ctx.imageSmoothingEnabled = false;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const CANVAS2_WIDTH = canvas2.width = 640;
const CANVAS2_HEIGHT = canvas2.height = 640;
ctx2.imageSmoothingEnabled = false;

const playerImage = new Image();
playerImage.src = "assets/trafficSprites.png";
const backgroundImage = new Image();
backgroundImage.src = "assets/road.png";
const grassBackgroundImage = new Image();
grassBackgroundImage.src = "assets/grass.png";

const frameSize = 64;
const frameSize2 = 320;
const frameSize3 = 32;
var gameFrame = 0;
var skipFrames = 10;

initObjects();

var player2X = 299;
var player2Y= CANVAS_HEIGHT-118;

var setSize = 128;

function  initObjects() {
    frameXSecondFish = 0;
    frameYSecondFish = 0;
}

function userMovement() {
    document.addEventListener("keydown", (e)=> {
        if(e.key.toLowerCase() === 'w') {
            if(player2Y > 0) {
                player2Y = player2Y - setSize/12;
            }
        } else if(e.key.toLowerCase() === 'd') {
            if(player2X < CANVAS_WIDTH-setSize) {
                player2X = player2X + setSize/12;
            }
        } else if(e.key.toLowerCase() === 's') {
            if(player2Y < CANVAS_HEIGHT-setSize) {
                player2Y = player2Y + setSize/12;
            }
        } else if(e.key.toLowerCase() === 'a') {
            if(player2X > 0) {
                player2X = player2X - setSize/12;
            }
        }
    })
}

function animatedMovement() {
        player2Y = player2Y -32
    
    // if(player2Y > 0) {
    //     player2Y = player2Y - setSize/12;
    // }
    // if(player2X < CANVAS_WIDTH-setSize) {
    //     player2X = player2X + setSize/12;
    // }
    // if(player2Y < CANVAS_HEIGHT-setSize) {
    //     player2Y = player2Y + setSize/12;
    // }
    // if(player2X > 0) {
    //     player2X = player2X - setSize/12;
    // }
}

function movement() {
    while (player2Y>0) {
    
    document.setTimeout(animatedMovement(), 100)
}
}

function car(animation) {
ctx2.drawImage(playerImage,frameXSecondFish*frameSize, animation*frameSize, frameSize, frameSize, player2X, player2Y, setSize, setSize);
}

function truck(x, y, animation) {
ctx2.drawImage(playerImage,frameXSecondFish*frameSize, animation*frameSize, frameSize, frameSize, x, y, setSize, setSize);
}

function road(x, y, animation) {
ctx.drawImage(backgroundImage,frameXSecondFish*frameSize2, animation*frameSize2, frameSize2, frameSize2, x, y, setSize*5, setSize*5);
}

function grass(x, y, animation) {
ctx.drawImage(grassBackgroundImage,frameXSecondFish*frameSize3, animation*frameSize3, frameSize3, frameSize3, x, y, setSize, setSize);
}
// movement()



function kindaLikeTheBackgroundLayer() {
    for(i=0; i<CANVAS_WIDTH; i++) {
        for(j=0; j<CANVAS_HEIGHT; j++) {
            grass(i*setSize, j*setSize, 0)
        }
    }
}
function notReallyTheTrueBackgroundLayer() {
    road(0*setSize, 0*setSize, 0)
}


function layer7() {
        car(0)
        // truck(2.35*setSize, 1.75*setSize, 5)
        // truck(2.35*setSize, 2.56*setSize, 6)
        
}


function scene0 () {
    kindaLikeTheBackgroundLayer()
    notReallyTheTrueBackgroundLayer()
    layer7();
}


function drawScreen() {
    ctx2.clearRect(0, 0, CANVAS2_WIDTH, CANVAS2_HEIGHT);
    scene0();
    gameFrame++;
    requestAnimationFrame(drawScreen);
};

function drawScreen2() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH);
    scene1();
    gameFrame++;
    requestAnimationFrame(drawScreen2)
}
drawScreen();
drawScreen2();
