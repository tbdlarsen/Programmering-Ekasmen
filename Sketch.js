//Globale variabler


//pieces

let rook;
let whitePawns = [];
let blackPawns = [];

let whiteRooks =[];
let blackRooks = [];

let whiteKnigts = [];
let blackKnigts = [];


//spritesheet
let spritesheet;



//mouse position
let positionX;
let positionY;



//Preloader spritesheet så det klar til brug.
function preload() {
  spritesheet = loadImage("Image/Spritesheet.png");
}


//Funktion setup (køre kode en gang)
function setup() {
  createCanvas(800, 800);


  startposition();
 
  }

//Funktion draw (køre kode i et loop)  
  function draw() {
    background(220);
    stroke(54);

    //Indsætter klassefunktioner
    
   
  
    //Laver spillebræt med linjer
    for (let i = 1; i <= 7; i++){
      line((width/8)*i,0,(width/8)*i, height);
      line(0,(height/8)*i,width,(height/8)*i)
     }
          


     for (let i = 0; i < 8; i++) {
      whitePawns[i].visual(0,5);
      
      
      blackPawns[i].visual(1,5);

    }

    for (let i = 0; i < whiteRooks.length; i++){
      whiteRooks[i].visual(0,4);
      blackRooks[i].visual(1,4);

    }


     //Finder musens koordinater og printer det til console
     positionX = int(map(mouseX,0,width,0,8));
     positionY = int(map(mouseY,0,height,0,8));
     print(positionX + " " + positionY)
     


     


  }
function startposition (){




//bønder
for (let i = 0; i < 8; i++) {

  if (i < 1){


  }

  if (i < 2){
    whiteRooks[i] = new Rook(i*700,0);
    blackRooks[i] = new Rook(i*700,700);

    whiteKnigts[i] = new Knight();


  }

  

  //bønder

  //hvid
  whitePawns[i] = new Pawn(100*i,100);

  //sort
  blackPawns[i] = new Pawn(100*i,600);
}









}

