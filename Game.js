
var width = 550,
    height = 500,
    isMobile = false,

    loadCount = 0,

//create top background gradient color, light blue
    color1 = 208,
    color2 = 231,
    color3 = 249,

//create bottom background gradient color, dark blue
    color4 = 22,
    color5 = 150,
    color6 = 247,

//alpha variable to be used for changing transparency
    alphaVar = 0,
    alphaSwitch = true,
    retryable = false,

    backGradient,
    gradColor1,
    gradColor2,

    CButton,
    PosButton,

    MouseClkX,
    MouseClkY,

//create background circles and array to hold them
    howManyCircles = 30,
    circles = [],

//create a number of energies and energies array.
    numOfEnergies = 7,
    energies = [],
    energyRadius = 25,
    energyImg = new Image(),

//create a number of platforms, platforms array, and dimensions
    numOfPlatforms = 7,
    platforms = [],
    platformWidth = 60,
    platformHeight = 18,


    platImage = new Image(),
    platImage2 = new Image(),

    bgCloudImage = new Image(),

    playerImage = new Image(),

    UILeftButton = new Image(),
    UIRightButton = new Image(),
    UISiteButton = new Image(),

    movementDirection = "none",


//create array to story keys so that program to tell when the keys are no longer down
    keysDown = {},

//    particles = [],

//   snd = new Audio("coinSound.mp3"),



    MouseMoveX,
    MouseMoveY,
    moving = false,
    touch,

    gLoop,
    points = 0,
    highscore = 0,

    wrongOrient = false,

    bgElement = new Image(),
    bgShuttle = new Image(),
    bgPlane = new Image(),
    bgElementY = 0,
    bgElementX = 0,
    bgElementAdded,
    bgCounter = 0,


    Landscape = new Image(),

    LandscapeY,
    bgLandscapeType,

//set current screen
    state = "start screen",

//grab canvas tag
    c = document.getElementById('c'),

    death = new Image(),
    deathWidth = 20,
    deathHeight = 20,

//get canvas context
    ctx = c.getContext('2d'),

    container = document.getElementById("container");


    //set canvas dimension
    c.width = width;
    c.height = height;

    if(localStorage.getItem("highScore"))
    {
        highscore = localStorage.getItem("highScore");
    }

    if(!!('ontouchstart' in window))
    {
        isMobile = true;
        reSize();
        container.style.textAlign = "left";
    }

//    if(!isMobile)
//    {
//        document.getElementById("bodyTag").style.textAlign = "center";
//    }

    Landscape.src = "AllLandBackgrounds.png";
    Landscape.onload = imgLoaded;
    bgCloudImage.src = "fadeBackCloud.png";
    bgCloudImage.onload = imgLoaded;
    platImage.src = "PixCloud1.png";
    platImage.onload = imgLoaded;
    platImage2.src = "PixCloud2.png";
    platImage2.onload = imgLoaded;
    bgElement.src = "Ballon.png";
    bgElement.onload = imgLoaded;
    playerImage.src = "Neg.png";
    playerImage.onload = imgLoaded;
    UILeftButton.src = "LeftButton.png";
    UILeftButton.onload = imgLoaded;
    UIRightButton.src = "RightButton.png";
    UIRightButton.onload = imgLoaded;
    UISiteButton.src = "SiteButton.png";
    UISiteButton.onload = imgLoaded;
    bgShuttle.src = "ShuttleTurned.png";
    bgShuttle.onload = imgLoaded;
    bgPlane.src = "Plane.png";
    bgPlane.onload = imgLoaded;
    energyImg.src = "Ring.png";
    energyImg.onload = imgLoaded;
    death.src = "Skull.png";
    death.onload = imgLoaded;


function scaleLoading(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0, c.width, c.height);

    ctx.strokeStyle = "#ffffff";
    ctx.fillStyle = "#ffffff";

    ctx.strokeRect(width/3, height/4+height/7, width/3, height/7);
    ctx.fillRect(width/3, height/4+height/7, width/40*loadCount, height/7);
}

function imgLoaded(){
    loadCount++;
    scaleLoading();
    if(loadCount === 13)
    {
        ctx.strokeStyle = "#000000";
        StartSetup();
    }
}
//   snd.preload= "auto";



//Start screen setup









//////Audio Experiment////////////////////////


//function coinHitSound()
//{
//    if(!isMobile)
//    {
//        snd.currentTime = 0;
//        snd.play();
//    }
//}


//
//var context,
//    soundSource,
//    soundBuffer;
//
//// Step 1 - Initialise the Audio Context
//// There can be only one!
//function init() {
//    if (typeof AudioContext == "function") {
//        context = new AudioContext();
//    } else if (typeof webkitAudioContext == "function") {
//        context = new webkitAudioContext();
//    } else {
//        throw new Error('AudioContext not supported. :(');
//    }
//}
//
//// Step 2: Load our Sound using XHR
//function startSound() {
//    // Note: this loads asynchronously
//    var request = new XMLHttpRequest();
//    request.open("GET", 'coinSound.mp3', true);
//
//    request.responseType = "arraybuffer";
//
//    // Our asynchronous callback
//    request.onload = function() {
//        var audioData = request.response;
//        audioGraph(audioData);
//
//
//    };
//
//    request.send();
//}
//
//// Finally: tell the source when to start
//function playSound() {
//    // play the source now
//    soundSource.noteOn(context.currentTime);
//}
//
//
//// This is the code we are interested in
//function audioGraph(audioData) {
//    // create a sound source
//    soundSource = context.createBufferSource();
//
//    // The Audio Context handles creating source buffers from raw binary
//    soundBuffer = context.createBuffer(audioData, false/* make mono */);
//
//    // Add the buffered data to our object
//    soundSource.buffer = soundBuffer;
//
//    // Plug the cable from one thing to the other
//    soundSource.connect(context.destination);
//
//    // Finally
//    playSound(soundSource);
//}
//init();


////////////////////////////////////////////////













function reSize()
{
    container.style.height = window.innerHeight;
    container.style.width = window.innerWidth;

    c.style.position='absolute';
    c.width = window.innerWidth;
    c.height= window.innerHeight;

    width = c.width;
    height = c.height;
}

function StartSetup()
{

    //create top background gradient color, light blue
    color1 = 208;
    color2 = 231;
    color3 = 249;

    //create bottom background gradient color, dark blue
    color4 = 22;
    color5 = 150;
    color6 = 247;

//    if(isMobile && window.innerWidth > 768)
//    {
//        gLoop = setTimeout(checkOrientation, 1000 / 50);
//    }

    if(isMobile)
    {
        reSize();
    }

    //clear screen for game
    ctx.fillStyle = '#00853F';
    ctx.clearRect(0, 0, width, height);

    //create start button, set using canvas dimensions, set to center of screen
    CButton = {X: c.width/2, Y: c.height/2, width: c.height/3, height: c.height/5};
    PosButton = {X: CButton.X - CButton.width/2, Y: CButton.Y - CButton.height/2};

    var my_gradient=ctx.createLinearGradient(0,0,width/2,0);
    my_gradient.addColorStop(0,"#ff0048");
    my_gradient.addColorStop(1,"#9900ff");

    //create title screen text (WEB IMPORTED FONT)
    ctx.fillStyle = my_gradient;
    ctx.font = "17pt Slackey";
    ctx.textAlign = 'center';
    ctx.fillText("Project Negative v0.1:", width / 2, height/4);
    ctx.fillText("A mobile friendly jumping game.", width / 2, height/4 + 70);

    //create title screen text (WEB IMPORTED FONT)
    ctx.fillStyle = "Black";
    ctx.font = "15pt Slackey";
    ctx.textAlign = 'center';
    ctx.fillText("(Click/Touch to start)", width / 2, height - 100);


    //position and add the the highscore text
    ctx.textAlign = 'left';
    ctx.font = "12pt Slackey";
    ctx.fillText("HIGH SCORE: " + highscore, 10, height - 10);


    //remove mousedown event handler from game over screen
    c.onmousedown = null;
    c.ontouchstart = null;


    //attach event handler to start button
    if(isMobile && window.innerWidth < window.innerHeight)
    {
        wrongOrient = false;
        c.ontouchstart = myDown;
    }
    else if(isMobile)
    {
        c.ontouchstart = invalidTouch;
    }
    else if(!isMobile)
    {

        c.onmousedown = myDown;
    }

    if(wrongOrient)
    {
        //position and add the the highscore text
        ctx.textAlign = 'center';
        ctx.font = "20pt Russo One";
        ctx.fillText("Turn the screen", height/2 + 100, width/2);
    }

    //create an animation loop for title screen (needed to import fonts from web onto canvas)
    gLoop = setTimeout(StartSetup, 1000/5);
}

function invalidTouch()
{
    wrongOrient = true;
}

function myDown(event)
{

    //grab mouse x and y for touch devices, || is for the android browser.
    if(isMobile)
    {
        MouseClkX = event.pageX - c.offsetLeft || event.targetTouches[0].pageX - c.offsetLeft;
        MouseClkY = event.pageY - c.offsetTop || event.targetTouches[0].pageY - c.offsetLeft;
    }
    //grab mouse x and y coordinates for desktop
    else{
        MouseClkX = event.x - c.offsetLeft;
        MouseClkY = event.y - c.offsetTop;
    }


    //check if mouse coordinates are within start button dimensions
    //remove start button event handlers.
    c.onmousedown = null;
    c.ontouchstart = null;


    //clear the screen, to setup the game.
    clearTimeout(gLoop);

//  window.location.href = "http://www.facebook.com"; ////Used to leave page and go to another site.



    //create a clean game slate, with new player position, energy positions, and platform positions.
    ResetGame();
}


function ResetGame()
{



    //push circle dimensions into array  (xPos, yPos, random height difference, type, speed)
    for (var i = 0; i < howManyCircles; i++)
    {
        circles.push([Math.random() * width + 100, Math.random() * height, 50 + Math.random() * 20, Math.floor(Math.random()*3), Math.floor(Math.random()*3)-1]);
    }



    generateEnergies();

    generatePlatforms();

    bgElementAdded = "none";

    bgLandscapeType = Math.floor(Math.random()*4);

    LandscapeY = 0;

    deathWidth = 20;
    deathHeight = 20;

    alphaVar = 0;
    retryable = false;


    //change position with player object
    player.setPosition(~~((width-player.width)/2), ~~((height - player.height)/2));
    player.jump();

    //for desktop add keyboard controls.
    if(!isMobile)
    {
        addEventListener("keydown", function (e) {
            keysDown[e.keyCode] = true;
        }, false);

        addEventListener("keyup", function (e) {
            delete keysDown[e.keyCode];
        }, false);
    }

    //function that adds mouse event handlers to the canvas and then actually starts rendering and animation
    StartGame();
}



//clear screen before loading game
function clear() {
//    ctx.fillStyle = 'rgb(' + Math.floor(color1) + ', ' + Math.floor(color2) + ', ' + Math.floor(color3) + ')';
//    ctx.clearRect(0, 0, width, height);
//    ctx.beginPath();
//    ctx.rect(0, 0, width, height);
//    ctx.closePath();
//    ctx.fill();

    gradColor1 = 'rgb(' + Math.floor(color1) + ', ' + Math.floor(color2) + ', ' + Math.floor(color3) + ')';
    gradColor2 = 'rgb(' + Math.floor(color4) + ', ' + Math.floor(color5) + ', ' + Math.floor(color6) + ')';

    backGradient = ctx.createLinearGradient(0,0, 0, c.height);
    backGradient.addColorStop(0,gradColor1);
    backGradient.addColorStop(1,gradColor2);

    ctx.fillStyle = backGradient;
    ctx.clearRect(0, 0, width, height);
    ctx.fillRect(0,0, c.width, c.height);

}

function UISetup()
{
    if(movementDirection === "left")
    {
        ctx.save();
        ctx.globalAlpha = .5;
        ctx.drawImage(UILeftButton, 0, height/2, width/7, width/7);
        ctx.restore();
    }
    else
    {
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.drawImage(UILeftButton, 0, height/2, width/7, width/7);
        ctx.restore();
    }
    if(movementDirection === "right")
    {
        ctx.save();
        ctx.globalAlpha = .5;
        ctx.drawImage(UIRightButton, width - width/7, height/2, width/7, width/7);
        ctx.restore();

    }
    else
    {
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.drawImage(UIRightButton, width - width/7, height/2, width/7, width/7);
        ctx.restore();
    }
    ctx.drawImage(UISiteButton, 0, 0, UISiteButton.width/7, UISiteButton.height/5);
    if(MouseMoveX < UISiteButton.width/7 && MouseMoveY < UISiteButton.height/5)
    {
        gLoop = setTimeout(function()
        {
            clearTimeout(gLoop);

            c.onmousedown = null;
            c.ontouchstart = null;

            top.location.href = "http://www.likethemammal.com"; ////Used to leave page and go to another site.
        }, 1000 / 50);
    }
}

function changeColor(varColor,rgbColor)
{
    if(varColor < rgbColor)
    {
        varColor += .2;
    }
    if(varColor > rgbColor)
    {
        varColor -= .2;
    }

    return varColor;
}



 function checkColor()
{
    //Change to purple, leave bottom blue
    if(points > 200 && points < 500)
    {

        color1 = changeColor(color1,237);
        color2 = changeColor(color2,201);
        color3 = changeColor(color3,219);

    }

    //Change to orange, change bottom to purple
    if(points > 500 && points < 900)
    {
        color1 = changeColor(color1,255);
        color2 = changeColor(color2,153);
        color3 = changeColor(color3,0);

        color4 = changeColor(color4,241);
        color5 = changeColor(color5,44);
        color6 = changeColor(color6,142);
    }


    //Change to charcoal black, change bottom to orange
    if(points > 900 && points < 1200)
    {
        color1 = changeColor(color1,48);
        color2 = changeColor(color2,48);
        color3 = changeColor(color3,48);

        color4 = changeColor(color4,255);
        color5 = changeColor(color5,153);
        color6 = changeColor(color6,0);
    }

    //Change color to black, based on points or suggestion
    if(points > 1200)
    {
        Black();
    }
}

function Black(){
    color1 = changeColor(color1,48);
    color2 = changeColor(color2,48);
    color3 = changeColor(color3,48);


    color4 = changeColor(color4,53);
    color5 = changeColor(color5,49);
    color6 = changeColor(color6,94);
}

function AlphaChange(typeOfChange){
    if(typeOfChange == "pulsate"){
        if(!alphaSwitch){
            alphaSwitch = false;
            alphaVar -= .05;
            if(alphaVar <= 0){
                alphaSwitch = true;
            }
        }
        if(alphaSwitch){
            alphaSwitch = true;
            alphaVar += .05;
            if(alphaVar >= 1){
                retryable = true;
                alphaSwitch = false;
            }
        }
    }
}


//draw circles by cycling through circles array and filling dimensions
function DrawCircles()
{
    for (var i = 0; i < howManyCircles; i++)
    {

//        (image, clipx, clipy, clipwidth, clipheight, posx, posy, reqWidth, reqHeight)

          ctx.drawImage(bgCloudImage, circles[i][3]*148, 0, 148, 41, circles[i][0] - 200, circles[i][1]-100, 148*2, 41*2);

//        ctx.beginPath();
//        ctx.fillStyle = 'rgba(255, 255, 255, .5)';
//        ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);
//        ctx.closePath();
//        ctx.fill();
    }
}


//move circles down the screen by "deltaY" pixels
function MoveCircles(deltaY)
{
    for (var i = 0; i < howManyCircles; i++)
    {
        if (circles[i][1] - 150 > height)
        {
            circles[i][0] = Math.random() * width + 100;
            circles[i][2] = Math.random() * 100;
            circles[i][1] = 0 - circles[i][2]; //put at random height
//          circles[i][4] = Math.random() / 2;
        }
        else
        {
            circles[i][1] += deltaY + circles[i][4];
        }
    }
}


function DrawLandscape()
{

    if(LandscapeY < height - 150)
    {
        LandscapeY = height - 150;
    }
    else if(points > 100 && player.Y < height * 0.4 && player.jumpSpeed > 10)
    {
        LandscapeY += player.jumpSpeed * .01;
    }

    //draw landscape to canvas while choosing which landscape image to use, (image, clipx, clipy, clipwidth, clipheight, posx, posy, reqWidth, reqHeight)

    if(LandscapeY < height)
    {
        ctx.drawImage(Landscape, 0, bgLandscapeType*150, 800, 150, width/2 - 400, Math.floor(LandscapeY), 800, 150);
    }

}

function AnimateBgElements(deltaY)
{

    if(bgElementAdded === "none")
    {
        if(points > 0)
        {
            bgElementX = Math.floor(Math.random()*(width - bgElement.width*4)+bgElement.width);
            bgElementY = -bgElement.height;
            bgElementAdded = "ballon";
        }
    }

    if(player.Y < height * 0.4 && player.jumpSpeed > 10)
    {
        bgElementY += player.jumpSpeed * 0.02;
    }

    if(bgElementY < height)
    {
        if(bgElementAdded === "ballon" && deltaY === .1)
        {
            if(bgCounter < 40)
            {
                bgElementX += .5;
            }
            if(bgCounter > 43 && bgCounter < 85)
            {
                bgElementX -= .5;
            }
            if(bgCounter > 88)
            {
                bgCounter = 0;
            }
            bgCounter += .5;
            bgElementY += deltaY;
            ctx.drawImage(bgElement, Math.floor(bgElementX), Math.floor(bgElementY), bgElement.width, bgElement.height);
        }
        if(bgElementAdded === "plane")
        {
            bgElementX--;
            ctx.drawImage(bgPlane, Math.floor(bgElementX), Math.floor(bgElementY), bgPlane.width, bgPlane.height);
        }
    }
    else if(bgElementAdded === "ballon")
    {
        bgElementAdded = "plane";
        bgElementX = width + bgPlane.width;
        bgElementY = width/4;
    }

    if(bgElementX < 0)
    {
        if(bgElementAdded === "plane")
        {
            bgElementAdded = "shuttle";
            bgElementX = width;
            bgElementY = width/2;
        }
    }
    if(bgElementAdded === "shuttle" && points > 700)
    {
        bgElementX--;
        bgElementY--;

        ctx.drawImage(bgShuttle, Math.floor(bgElementX), Math.floor(bgElementY), bgShuttle.width, bgShuttle.height);
    }
}




//energy/coin class
function Energy(x, y)
{
    var that = this;
    that.x = ~~x;
    that.y = y;
    that.removed = false;

    //if collision add jumpspeed to the player and remove energy ball (moving it to thee top of the screen to be dropped down again.
    that.onCollide = function()
    {
        player.jumpSpeed += 3;
        that.removed = true;
//      coinHitSound();
        energies.forEach(function (energy, ind) {
            if (energy.removed == true)
            {
                energies[ind] = new Energy(Math.random() * (width - energyRadius), energy.y - height);
            }
        });

        player.fallStop();

    };

    //draw energy to screen, x and y are in the top left corner or drawing, NOT CENTER!!!
    that.draw = function()
    {
//        ctx.beginPath();
//        ctx.arc(that.x + energyRadius, that.y + energyRadius, energyRadius,0,2*Math.PI);
//        ctx.closePath();
//        ctx.stroke();

        ctx.drawImage(energyImg, that.x, that.y, energyRadius, energyRadius);

        //Used to show collision detection.
//        ctx.fillStyle = "#988998";
//        ctx.fillRect(that.x, that.y, energyRadius * 2,energyRadius * 2);
    };

    return that;
}


//generate energies by adding their dimensions to an energies array to be used later.
function generateEnergies()
{
    var position = 0;

    for (var i = 0; i < numOfEnergies; i++)
    {

        //add platform to array with dimensions
        energies[i] = new Energy(Math.random()*(width-energyRadius),position);

        //if platform is below screen add it to the top of the screen.... (I think lol)
        if (position < height - energyRadius)
        {
            position += ~~(height / numOfEnergies);
        }
    }
}


//platform class that player bounces off of
function Platform(x, y, type)
{
    var that=this;


    //set platform coordinates and type to function arguments
    that.x = ~~x;
    that.y = y;
    that.type = type;

    if(type === 1)
    {
        that.width = 77;
        that.height = 41;
    }
    else
    {
        that.width = 85;
        that.height = 30;
    }


    that.scaleX = that.width;
    that.scaleY = that.height;
    that.scaleSwitch = true;


    //create a true or false statement about whether platform is moving. ~~ is equal to Math.floor()
    that.isMoving = ~~(Math.random() * 2);

    //set platform directions when moving on the higher part of the level
    that.direction= ~~(Math.random() * 2) ? -1 : 1;

    //set colors for platform gradient
    that.firstColor = '#FFFFFF';
    that.secondColor = '#9F9F9F';


    that.onCollide = function()
    {
        //if player collides with platform change the color of platform
        that.firstColor = '#3E3C3C';
        that.secondColor = '#3E3C3C';

        //set the player status to stop falling
        player.fallStop();
    };

    //if platform is gray then jumpspeed is alot more.
    if (type === 1)
    {
        that.width = 77;
        that.height = 41;
        that.firstColor = '#DEDEDE';
        that.secondColor = '#9A9A9A';

        //change color of platform once its hit.
        that.onCollide = function()
        {
            that.firstColor = '#1B1B1B';
            that.secondColor = '#000000';
            player.fallStop();
            player.jumpSpeed = 50;
        };
    }


//    that.draw = function()
//    {
//        //create platform gradient
//        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
//
//        var gradient = ctx.createRadialGradient(that.x + (platformWidth/2), that.y + (platformHeight/2), 5, that.x + (platformWidth/2), that.y + (platformHeight/2), 45);
//
//
//        gradient.addColorStop(0, that.firstColor);
//        gradient.addColorStop(1, that.secondColor);
//
//        //create platforms using platform gradient as coloring.
//        ctx.fillStyle = gradient;
//        ctx.fillRect(that.x, that.y, platformWidth, platformHeight);
//    };




    that.draw = function ()
    {
        try
        {
            if (type === 0)
            {
                //white cloud
                ctx.drawImage(platImage, that.x - that.scaleX/2, that.y, that.scaleX, that.scaleY);
            }
            if (type === 1)
            {
                //gray cloud
                ctx.drawImage(platImage2,that.x - that.scaleX/2, that.y, that.scaleX, that.scaleY);


            }

        }
        catch (e) {

        }
        if(that.scaleSwitch)
        {
            if(that.scaleX > that.width*.8)
            {
                that.scaleX = that.scaleX *.993;
                that.scaleY = that.scaleY *.992;
            }
            if(that.scaleX < that.width*.8)
            {
                that.scaleSwitch = false;
            }
        }
        if(!that.scaleSwitch)
        {
            if(that.scaleX < that.width)
            {
              that.scaleX = that.scaleX *1.007;
              that.scaleY = that.scaleY *1.008;
            }
            if(that.scaleX >= that.width)
            {
                that.scaleSwitch = true;
            }
        }




    };

    return that;
}


function generatePlatforms()
{

    var position = 0, type;

    for (var i = 0; i < numOfPlatforms; i++)
    {
        //create the platform type based on a 1/5th chance to be a gray one
        type = ~~(Math.random()*5);
        if (type == 0) type = 1;
        else type = 0;

        //add platform to array with dimensions
        platforms[i] = new Platform(Math.random()*(width- platformWidth),position,type);

        //if platform is below screen add it to the top of the screen.... (I think lol)
        if (position < height - platformHeight)
        {
            position += ~~(height / numOfPlatforms);
        }
    }
}


var player = new (function()
{
    var that = this;

    //set image parameter to image





    //set player status to null
    that.isJumping = false;
    that.isFalling = false;

    //set speed to null
    that.jumpSpeed = 0;
    that.fallSpeed = 0;

    //set image source to player image


    var oscillateNumX = 1;
    var oscillateNumY = 1;
    var toowide = false;

    //dimensions

//    that.preOscWidth = 40;
//    that.preOscHeight = 40;
//
//    that.width = that.preOscWidth * oscillateNumX;
//    that.height = that.preOscHeight * oscillateNumY;

    that.width = 40;
    that.height = 40;

    //set frames for drawing animation of player (bouncing)
    that.frames = 1;
    that.drawFrame = 0;
    that.jumpFrame = 0;

    that.X = 0;
    that.Y = 0;


    //create a setPosition function used to animate
    that.setPosition = function (x, y) {
        that.X = x;
        that.Y = y;
    };



    //set the speed of the animation to 0. To be updated as game plays.
    that.interval = 0;

    //player jump function
    that.jump = function () {
        if (!that.isJumping && !that.isFalling) {
            that.fallSpeed = 0;
            that.isJumping = true;
            that.jumpFrame = 1;
            that.jumpSpeed = 17;
        }
    };


    //check jump and move circles, platforms, and energies when player jumps high enough
    that.checkJump = function () {

        //move the player if they're above a certain portion of the screen
        if (that.Y > height * 0.4) {
            that.setPosition(that.X, that.Y - that.jumpSpeed);
        }
        else {
            if (that.jumpSpeed > 10) points++;

            MoveCircles(that.jumpSpeed * 0.5);



            //move platforms down the screen as player jumps up. Create new platforms at the top.
            platforms.forEach(function (platform, ind) {
                platform.y += that.jumpSpeed;

                if (platform.y > height) {
                    var type = ~~(Math.random() * 5);
                    if (type == 0)
                        type = 1;
                    else
                        type = 0;
                    platforms[ind] = new Platform(Math.random() * (width - platform.scaleX), platform.y - height, type);
                }
            });

            //move energies down the screen as player jumps up. Create new energies at the top.
            energies.forEach(function (energy, ind) {
                energy.y += that.jumpSpeed;

                if (energy.y > height || energy.removed == true)
                {
                    energies[ind] = new Energy(Math.random() * (width - energyRadius), energy.y - height);
                }
            });

        }

        //simulate gravity for player
        that.jumpSpeed--;
        if (that.jumpSpeed == 0)
        {
            that.isJumping = false;
            that.isFalling = true;
            that.jumpFrame = 0;
            that.fallSpeed = 1;
        }

    };

    //check if player is below the screen and if the player has jumped on any platforms, then the game is over
    that.checkFall = function () {


        if (that.Y < height - that.height) {
            that.setPosition(that.X, that.Y + that.fallSpeed);
            that.fallSpeed++;
        }
        else {
            if (points <= 6)
                that.fallStop();
            else
                Death();
        }
    };


    //reverse the fall into a jump
    that.fallStop = function () {
        that.isFalling = false;
        that.fallSpeed = 0;
        that.jump();
    };



    //draw player to screen
    that.draw = function()
    {
        try
        {
            //draw player at set variable values

//            var date = new Date();
//            var time = date.getTime();
//
//            var widthScale = Math.sin(time / 200) * 0.1 + 0.9;
//            var heightScale = -1 * Math.sin(time / 200) * 0.1 + 0.9;
//            alert(Math.sin(time / 200) * 0.1 + 0.9);

            if(oscillateNumX < 1.8 && toowide == false)
            {
                oscillateNumX += .05;
                if(oscillateNumY > 1)
                {
                    oscillateNumY -= .05;
                }
                if(oscillateNumX >= 1.8)
                {
                    toowide = true;
                }

            }
            if(toowide == true)
            {
                if(oscillateNumX > 1)
                {
                    oscillateNumX -= .05;
                }

                if(oscillateNumY < 1.8)
                {
                    oscillateNumY += .05;
                    if(oscillateNumY >= 1.8)
                    {
                        toowide = false;
                    }
                }
            }

//            ctx.fillStyle="#666666";
//
//            ctx.fillRect(that.X, that.Y, that.width, that.height);


//            ctx.fillStyle = "#676767";
//            ctx.fillRect(that.X, that.Y, that.width, that.height);

            ctx.save();

                ctx.drawImage(playerImage, that.X, that.Y, that.width, that.height);

//            drawEllipse(that.X, that.Y, that.width, that.height);
//            ctx.translate(50, 0);
            ctx.restore();



//            function drawEllipse(centerX, centerY, width, height) {
//
//                centerX += width/4;
//                centerY += height/4;
//
//                ctx.beginPath();
//
//
//
//                ctx.moveTo(centerX, centerY - height/2); // A1
//
//
//
//                ctx.bezierCurveTo(
//                    centerX + width/2, centerY - height/2, // C1
//                    centerX + width/2, centerY + height/2, // C2
//                    centerX, centerY + height/2); // A2
//
//                ctx.bezierCurveTo(
//                    centerX - width/2, centerY + height/2, // C3
//                    centerX - width/2, centerY - height/2, // C4
//                    centerX, centerY - height/2); // A1
//
//                ctx.translate(that.width/2, that.height/2);
//
//                ctx.fillStyle = "red";
//                ctx.fill();
//                ctx.closePath();
//            }


        }
        catch (e)
        {

        }



        //set interval to simulate/delay animation.
        if (that.interval == 6)
        {

            if (that.drawFrame == that.frames)
            {
                that.drawFrame = 0;
            }
            else
            {
                that.drawFrame++;
            }

            that.interval = 0;

        }
        that.interval++;
    }
})();


//check if player's position is overlaying any platform dimensions
function checkCollision() {
    platforms.forEach(function (e) {
        if ((player.isFalling) &&
            (player.X < e.x - e.scaleX/2 + e.scaleX) &&
            (player.X + player.width > e.x - e.scaleX/2) &&
            (player.Y + player.height < e.y + e.scaleY) &&
            (player.Y + player.height > e.y)){
            e.onCollide();
        }
    })
}


//check if player hits an energy ball
function checkEnergyCollision() {
    energies.forEach(function (e) {
        if ((player.X < e.x + energyRadius) &&
            (player.X + player.width > e.x) &&
            (player.Y < e.y + energyRadius) &&
            (player.Y + player.height > e.y)) {
            e.onCollide();
            //startSound();
        }
    })
}


//create particle attributes to be used to draw later. (X-position, Y-position, radius, gravity speed, alpha, X direction)]
/*
function addParticle (x, y)
{
    for (var k = 0; k < 10; k++)
    {
        //add attributes to particles array.
        particles.push([x + 25 + Math.floor(1 + Math.random()*25), y + player.width/2, 5, Math.floor(3 + Math.random()*7)]);

        //for some reason it wouldn't add these to the rest of the array
        particles[k][4] = 1;                            //alpha
        particles[k][5] = Math.floor(Math.random()*4);   //X direction
    }
}


//draws particles, fades them, and simulates their movement/falling.
function drawParticle ()
{
    for (var k = 0; k < 10; k++)
    {

        //if player is falling start fading out particle, once transparent add back to player's location
        if(player.isFalling && particles[k][1] > player.Y + player.height*4)
        {
            particles[k][4] -= .3;                      //fade out
            if(particles[k][4] <= 0)
            {
                particles[k][0] = player.X + 25 + Math.floor(1 + Math.random()*25);     //create new X
                particles[k][1] = player.Y + player.width/2;                            //create new Y
                particles[k][3] = Math.floor(3 + Math.random()*7);                      //create new gravity speed
                particles[k][4] = 0;                                                    //keep invisible
            }
        }

        //if particles fall below the player enough fade them out and reposition them back to player location
        if(particles[k][1] > player.Y + player.height*4)
        {
            particles[k][4] -= .05;
            if(particles[k][4] <= 0)
            {
                particles[k][0] = player.X + 25 + Math.floor(1 + Math.random()*25);
                particles[k][1] = player.Y + player.width/2;
                particles[k][3] = Math.floor(3 + Math.random()*7);
                particles[k][4] = 1;
            }
        }
        else
        {
            //draw particle using attributes taken from the array
            ctx.fillStyle = 'rgba(0, 0, 0, ' + particles[k][4] + ')';
            ctx.beginPath();
            ctx.arc(particles[k][0], particles[k][1], particles[k][2],0,2*Math.PI);
            ctx.closePath();
            ctx.fill();

            particles[k][1] += particles[k][3];                    //simulate gravity at the chosen speed

            //if particle is past the bottom of the player start fading it out, or if speed is too slow fade out.
            if(particles[k][1] > player.Y + player.height*2 || particles[k][3] < 4)
            {
                particles[k][4] -= 0.05;
            }

            //add some horizontal direction to 2/3s of the particles, moving either left or right
            if(particles[k][5] == 1)
            {
                particles[k][0] -= 1;
            }
            if(particles[k][5] == 2)
            {
                particles[k][0] += 1;
            }
        }
    }
}
*/




function StartGame()
{

    //touch event handlers (for mobile)
    c.ontouchstart = function (event) {
        event.preventDefault();
        touch = event.targetTouches[0];
        MouseMoveX = touch.pageX - c.offsetLeft;
        MouseMoveY = touch.pageY - c.offsetTop;
        moving = true;
    };
//    c.addEventListener("touchstart", function (event)
//    {
//        event.preventDefault();
//        touch = event.targetTouches[0];
//        MouseMoveX = touch.pageX - c.offsetLeft;
//        moving = true;
//
//    }, true);

    c.ontouchend = function()
    {
        moving = false;
    };

//    c.addEventListener('touchend', function ()
//    {
//        moving = false;
//    },  true);

    if(!isMobile)
    {
        //mouse event handlers (for desktop testing)
        c.onmousedown = function (event)
        {
            MouseMoveX = event.pageX - c.offsetLeft || event.targetTouches[0].pageX - c.offsetLeft;
            MouseMoveY = event.pageY - c.offsetTop || event.targetTouches[0].pageY - c.offsetLeft;
            moving = true;
        };

        c.onmouseup = function ()
        {
            moving = false;
        };
    }


    //create the particles to be draw and redrawn for the particle effect. No new particles are created after this point.
//    addParticle(player.X, player.Y);

    //game loop that animates everything in order to simulate layering
    GameLoop();
}


function GameLoop ()
{



    if(isMobile && window.innerWidth > window.innerHeight)
    {
        gLoop = setTimeout(checkOrientation, 1000 / 50);
    }

    if(isMobile)
    {
        reSize();
    }

    clear();
    checkColor();

    DrawLandscape();
    AnimateBgElements(.1);
    DrawCircles();
    MoveCircles(2);

    UISetup();


    if (player.isJumping) {
        player.checkJump();
    }
    if (player.isFalling) {
        if(state !== "game over"){
            player.checkFall();
        }
    }



    //check if mouse is not down, if so turn off movement direction.
    if(moving == false)
    {
        movementDirection = "none";
    }

    //check if mouse or touch or keyboard is down, if so move player 15 pixels, and stop movement after death
    if(state !== "game over"){
        if(((moving == true && MouseMoveX < c.width/2) || 37 in keysDown) && player.X > 0)
        {
            movementDirection = "left";
            player.setPosition(player.X - 15, player.Y);
        }
        if(((moving == true && MouseMoveX > c.width/2) || 39 in keysDown) && player.X + player.width < width)
        {
            movementDirection = "right";
            player.setPosition(player.X + 15, player.Y);
        }
    }


    //draw particles in their current state, simulating movement.
//    drawParticle();

    //draw player to canvas.

    player.draw();




    //draw energies to canvas.
    energies.forEach(function (energy) {
        energy.draw();
    });

    //draw platforms to canvas and if player is high enough move playform's position and redraw.
    platforms.forEach(function (platform, index) {
        if (platform.isMoving) {

            if (platform.x < 0) {
                platform.direction = 1;
            }
            else if (platform.x > width - platform.scaleX) {
                platform.direction = -1;
            }

            platform.x += platform.direction * (index / 2) * ~~(points / 100);

        }
        platform.draw();
    });


    checkCollision();
    checkEnergyCollision();


    ctx.fillStyle = "Black";
    ctx.font = "12pt Carter One";
    ctx.textAlign = 'left';
    ctx.fillText("POINTS: " + points, 10, height - 10);
    ctx.fillText("HIGH SCORE: " + highscore, 10, height - 30);

    //call player.checkFall function to make the Death function call, moves the animation in front of clouds, platforms, etc.
    if(state == "game over"){
        Black();
        player.checkFall();
    }

    if(points >= highscore)
    {
        highscore = points;
    }

    //actually makes the browser create an animation loop
    if (state !== "game over") {
        gLoop = setTimeout(GameLoop, 1000 / 50);
    }

}


function checkOrientation()
{
    clearTimeout(gLoop);

    state = "pause screen";

//    clear();

    if(ctx.fillStyle !== "#ffffff")
    {
        ctx.fillStyle = "rgba(0,0,0, .5)";
        ctx.fillRect(0,0, c.width, c.height);
    }

    ctx.fillStyle = "White";
    ctx.font = "50px Russo One";
    ctx.textAlign = 'center';
    ctx.fillText("PAUSED", width / 2, height / 2);
    ctx.fillText("TURN THE SCREEN PLEASE", width / 2, height / 2 + 50);


    if(window.innerWidth < window.innerHeight)
    {
        state = "game screen";

        clearTimeout(gLoop);

        GameLoop();
    }
    else{
        gLoop = setTimeout(checkOrientation, 1000 / 50);
    }
}

function Death(){

    state = "game over";

    clearTimeout(gLoop);

    ctx.drawImage(death, width/2 - deathWidth/2, height/2 - deathHeight/3 - height/10, deathWidth, deathHeight);
    deathWidth *= 1.15;
    deathHeight *= 1.15;

    if(deathWidth <= width*8){
        gLoop = setTimeout(GameLoop, 25);
    }
    else{
        gLoop = setTimeout(GameOver, 50);
    }

}

function GameOver()
{

    ctx.fillStyle = "Black";

    color1 = 0;
    color2 = 0;
    color3 = 0;

    color4 = 0;
    color5 = 0;
    color6 = 0;




    if(isMobile)
    {
        reSize();
    }



    state = "game over";

    localStorage.setItem("highScore", highscore);

    clearTimeout(gLoop);

    //sets animation loop to a basic canvas with game over text
    clear();

    ctx.fillStyle = "#ffffff";
    ctx.font = "10pt Slackey";
    ctx.textAlign = 'left';
    ctx.fillText("GAME OVER", width / 2, height / 2 - 50);
    ctx.fillText("YOUR RESULT:" + points, width / 2, height / 2 - 30);
    ctx.fillText(window.innerWidth, width / 2, height / 2 + 60);
    ctx.fillText(isMobile, width / 2, height / 2 + 80);

    ctx.globalAlpha = alphaVar;
    AlphaChange("pulsate");
    ctx.fillText("(Click to Retry)", width / 2, height / 2 + 20);
    ctx.globalAlpha = 1;



    if(isMobile && window.innerWidth > window.innerHeight)
    {
        gLoop = setTimeout(gameOverOrient, 1000 / 50);
    }


    //if you click again then the game will restart
    if(retryable){
        c.onmousedown = Restart;
        c.ontouchstart = Restart;
    }

    function Restart(event){
        event.preventDefault();
        clearTimeout(gLoop);
        state = "start screen";
        points = 0;
        StartSetup();
    }

    gLoop = setTimeout(GameOver, 50);
}


function gameOverOrient()
{

    clearTimeout(gLoop);

    state = "pause screen";

    clear();

    ctx.fillStyle = "Black";
    ctx.font = "10pt Arial";
    ctx.textAlign = 'center';
    ctx.fillText("Turn the screen please", width / 2, height / 2 + 20);


    if(window.innerWidth < window.innerHeight)
    {
        state = "game over";

        clearTimeout(gLoop);

        GameOver();
    }
    else{
        gLoop = setTimeout(gameOverOrient, 1000 / 50);
    }
}