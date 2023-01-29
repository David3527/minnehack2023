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

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
const CANVAS3_WIDTH = canvas3.width = 640;
const CANVAS3_HEIGHT = canvas3.height = 640;
ctx2.imageSmoothingEnabled = false;

const playerImage = new Image();
playerImage.src = "assets/trafficSprites.png";
const crossingRoadBackgroundImage = new Image();
crossingRoadBackgroundImage.src = "assets/road.png";
const grassBackgroundImage = new Image();
grassBackgroundImage.src = "assets/grass.png";
const passingRoad = new Image();
passingRoad.src = "assets/passRoad.png"

const frameSize = 64;
const frameSize2 = 320;
const frameSize3 = 32;
var gameFrame = 0;
var skipFrames = 10;

initObjects();
var initialX = 299
var initialY = CANVAS_HEIGHT-118
var player2X = initialX;
var player2Y= initialY;

var initial2X = 299
var initial2Y = CANVAS_HEIGHT-118
var player3X = initial2X;
var player3Y= initial2Y;

var initial3X = 299
var initial3Y = CANVAS_HEIGHT-118
var playerX = initial3X;
var playerY= initial3Y;

var initial4X = CANVAS_WIDTH-133
var initial4Y = 1.75*128-3
var player4X = initial4X;
var player4Y= initial4Y;


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
                console.log(player2Y)
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
                console.log(player2X)
            }
        }
    })
}

let armed = true
function reset() {
    location.reload()
}
function movement() {
    pause = false
    let left=true
    if(armed = true) {
    setInterval(function(){
        if(player2Y >= 0.00 && player2X > 234 && left === true && pause === false) {
            player2Y = player2Y -16
            player2X = player2X - 16
        } else if(player2Y >= 95.33333333333333333333333333333333 && pause === false) {
            player2Y = player2Y -16
            left = false
        } else if(player2Y >= 0 && player2X < 299 && left === false && pause === false) {
            player2Y = player2Y -16
            player2X = player2X + 16
        } else if(player2Y > 0 && pause === false) {
            player2Y = player2Y -16
        } if(player2Y == 1) {
            player2Y = CANVAS_HEIGHT-118
            armed = false
        }
        }, 50);
}
}

function movement2() {
    pause = false
    let left=true
    if(armed = true) {
    setInterval(function(){
        if(player3Y >= 0.00 && player3X > 234 && left === true && pause === false) {
            player3Y = player3Y -16
            player3X = player3X - 16
        } else if(player3Y >= 95.33333333333333333333333333333333 && pause === false) {
            player3Y = player3Y -16
            left = false
        } else if(player3Y >= 0 && player3X < 299 && left === false && pause === false) {
            player3Y = player3Y -16
            player3X = player3X + 16
        } else if(player3Y > 0 && pause === false) {
            player3Y = player3Y -16
        } if(player3Y == 1) {
            player3Y = CANVAS_HEIGHT-118
            armed = false
        }
        }, 50);
}
}

function movement3() {
    
    setInterval(function(){
        if(playerY > 400) {
            playerY = playerY -16
        }
        if(player4X === 400) {
            player4X = player4X -16
        }
        setInterval(function(){
            if(player4X === 398) {
                player4X = player4X

            }
            }, 2000);
        setInterval(function(){
                if(player4X ===400 && player4X >= 0) {
                    player4X = player4X -16
                }
                }, 50);
        setInterval(function(){
            if(player4X == 0 && playerY >= 0) {
                playerY = playerY -16
            }
            if(player4X > 400) {
                player4X = player4X -16
            }
            }, 50);
        }, 50);
}
// setInterval(function(){
//     if(player4X = 0 && playerY > 0) {
//         playerY = playerY -16
//     }
// })



function car(animation) {
ctx.drawImage(playerImage,frameXSecondFish*frameSize, animation*frameSize, frameSize, frameSize, player2X, player2Y, setSize, setSize);
}

function car2(animation) {
ctx2.drawImage(playerImage,frameXSecondFish*frameSize, animation*frameSize, frameSize, frameSize, player3X, player3Y, setSize, setSize);
}

function car3(animation) {
ctx3.drawImage(playerImage,frameXSecondFish*frameSize, animation*frameSize, frameSize, frameSize, playerX, playerY, setSize, setSize);
}

function car4(animation, frameXSecondFish) {
ctx3.drawImage(playerImage,frameXSecondFish*frameSize, animation*frameSize, frameSize, frameSize, player4X, player4Y, setSize, setSize);
}

function truck(x, y, animation) {
ctx.drawImage(playerImage,frameXSecondFish*frameSize, animation*frameSize, frameSize, frameSize, x, y, setSize, setSize);
}

function truck2(x, y, animation, frameXSecondFish) {
ctx2.drawImage(playerImage,frameXSecondFish*frameSize, animation*frameSize, frameSize, frameSize, x, y, setSize, setSize);
}

function road(x, y, animation) {
ctx3.drawImage(crossingRoadBackgroundImage,frameXSecondFish*frameSize2, animation*frameSize2, frameSize2, frameSize2, x, y, setSize*5, setSize*5);
}

function secondRoad(x, y, animation) {
ctx.drawImage(passingRoad,frameXSecondFish*frameSize2, animation*frameSize2, frameSize2, frameSize2, x, y, setSize*5, setSize*5);
}
function secondRoad2(x, y, animation) {
ctx2.drawImage(passingRoad,frameXSecondFish*frameSize2, animation*frameSize2, frameSize2, frameSize2, x, y, setSize*5, setSize*5);
}

function grass(x, y, animation) {
ctx.drawImage(grassBackgroundImage,frameXSecondFish*frameSize3, animation*frameSize3, frameSize3, frameSize3, x, y, setSize, setSize);
}

function grass2(x, y, animation) {
ctx2.drawImage(grassBackgroundImage,frameXSecondFish*frameSize3, animation*frameSize3, frameSize3, frameSize3, x, y, setSize, setSize);
}

function grass3(x, y, animation) {
ctx3.drawImage(grassBackgroundImage,frameXSecondFish*frameSize3, animation*frameSize3, frameSize3, frameSize3, x, y, setSize, setSize);
}

function stop(x, y, animation) {
ctx3.drawImage(playerImage,frameXSecondFish*frameSize, animation*frameSize, frameSize, frameSize, x, y, setSize/2, setSize/2);
}

function stopLayer() {
    stop(3.25*setSize,1.35*setSize,8)
    stop(1.25*setSize,1.35*setSize,8)
    stop(3.25*setSize,3.35*setSize,8)
    stop(1.25*setSize,3.35*setSize,8)
}

function kindaLikeTheBackgroundLayer() {
    for(i=0; i<CANVAS_WIDTH; i++) {
        for(j=0; j<CANVAS_HEIGHT; j++) {
            grass(i*setSize, j*setSize, 0)
        }
    }
}

function kindaLikeTheBackgroundLayer3() {
    for(i=0; i<CANVAS_WIDTH; i++) {
        for(j=0; j<CANVAS_HEIGHT; j++) {
            grass3(i*setSize, j*setSize, 0)
        }
    }
}
function notReallyTheTrueBackgroundLayer() {
        for(j=0; j<CANVAS_HEIGHT; j++) {
            secondRoad(2*setSize-7, j*setSize, 0)
        }

}

function notReallyTheTrueBackgroundLayer3() {
        road(0*setSize, 0*setSize, 0)
}

function kindaLikeTheBackgroundLayer2() {
    for(i=0; i<CANVAS_WIDTH; i++) {
        for(j=0; j<CANVAS_HEIGHT; j++) {
            grass2(i*setSize, j*setSize, 0)
        }
    }
}

function layerPassRoad2() { 
    for(j=0; j<CANVAS_HEIGHT; j++) {
        secondRoad2(2*setSize-7, j*setSize, 0)
    }
}

function layer7() {
        car(0)
        truck(2.35*setSize, 1.50*setSize, 5)
        truck(2.35*setSize, 2.31*setSize, 6)
        
}

function layer72() {
    truck2(2.35*setSize, 1.50*setSize, 5, 1)
    truck2(2.35*setSize, 2.31*setSize, 6, 1)
    car2(0)
    
}

function layer73() {
    // truck2(2.35*setSize, 1.50*setSize, 5, 1)
    // truck2(2.35*setSize, 2.31*setSize, 6, 1)
    car3(0)
    car4(1,1)
}
function scene0 () {
    layer7();
}

function scene1() {
    kindaLikeTheBackgroundLayer()
    notReallyTheTrueBackgroundLayer()
}

function scene2() {
    layerPassRoad();
}

function scene22() {
    kindaLikeTheBackgroundLayer2();
    layerPassRoad2();
    layer72();
}

function scene33() {
    kindaLikeTheBackgroundLayer3();
    notReallyTheTrueBackgroundLayer3();
    stopLayer();
    layer73()
}


function drawScreen2() {
    ctx2.clearRect(0, 0, CANVAS2_WIDTH, CANVAS2_HEIGHT);
    scene22();
    gameFrame++;
    requestAnimationFrame(drawScreen2);
};

function drawScreen3() {
    ctx3.clearRect(0, 0, CANVAS3_WIDTH, CANVAS3_HEIGHT);
    scene33();
    gameFrame++;
    requestAnimationFrame(drawScreen3);
};

function drawScreen() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH);
    scene1();
    scene0();
    gameFrame++;
    requestAnimationFrame(drawScreen)
}
drawScreen();
drawScreen2();
drawScreen3();
