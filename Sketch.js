//Globale variabler


//pieces
let pawn;
let WhitePawns = [];
//et BlackPawns = [];




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

  for (let i = 0; i < 8; i++) {
    pawns[i] = new Pawn(100*i,200);
  }

 
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
      pawns[i].visual(0,5);
      print(pawns[i].x,pawns[i].y)
      
    }


     //Finder musens koordinater og printer det til console
     positionX = int(map(mouseX,0,width,0,8));
     positionY = int(map(mouseY,0,height,0,8));
     print(positionX + " " + positionY)
     


     


  }
function startposition (){


//hvid





//sort



}

