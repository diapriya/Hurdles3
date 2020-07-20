const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState =0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form,player,game;
var players,player1,player2,player3,player4;
var player1_img,player2_img,player3_img,player4_img;
var hurdles,hurdle1,hurdle2,hurdle3,hurdle4,hurdle5,hurdle6,hurdle7,hurdle8

function preload(){
 track = loadImage("../img/track.png")
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  engine = Engine.create();
  world = engine.world;
 
  
   form = new Form();
 
  hurdle1 = new Hurdle(100,700,1,1);
  hurdle2 = new Hurdle(100,500,1,1);
  hurdle3 = new Hurdle(300,700,1,1);
  hurdle4 = new Hurdle(300,500,1,1);
  hurdle5 = new Hurdle(500,700,1,1);
  hurdle6 = new Hurdle(500,500,1,1);
  hurdle7 = new Hurdle(700,700,1,1);
  hurdle8 = new Hurdle(700,500,1,1);

  
  

if(playerCount=0){
  hurdle1.hide;
  hurdle2.hide;
  hurdle3.hide;
  hurdle4.hide;
  hurdle5.hide;
  hurdle6.hide;
  hurdle7.hide;
  hurdle8.hide;
  
}
//if(playerCount=4){
  ///game = new Game();
  //game.getState();
 // game.start();}
}

function draw() {

  if(playerCount === 4){
    game.update(1);
    //game.play();
  }
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  
  form.display();
 
  hurdle1.display();
  hurdle2.display();
  hurdle4.display();
  hurdle3.display();
  hurdle5.display();
  hurdle6.display();
  hurdle7.display();
  hurdle8.display();
  drawSprites();
}


this.jump = function() {
  if(keyCode[32]) {
    
 
  }
}

function hide(){
  hurdle1.hide;
  hurdle2.hide;
  hurdle3.hide;
  hurdle4.hide;
  hurdle5.hide;
  hurdle6.hide;
  hurdle7.hide;
  hurdle8.hide;
  
}