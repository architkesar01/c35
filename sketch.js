var ball;
var database,position
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
database=firebase.database()
var lball=database.ref("ball/position")
lball.on("value",rpos,sh)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
     writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
     writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
     writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
     writeposition(0,+1);
    }
    drawSprites();
}

function writeposition(x,y){
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y

    })
}
function rpos(data){
position=data.val()
ball.x=position.x
ball.y=position.y
}
function sh(){
 console.log("e")   
}