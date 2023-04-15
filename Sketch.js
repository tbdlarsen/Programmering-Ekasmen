//Globale variabler

//Pieces



let wPieces = [];
let bPieces = [];


//Spritesheet
let spritesheet;


//Mouse position
let positionX;
let positionY;


//Preloader spritesheet så det klar til brug.
function preload() {
  spritesheet = loadImage("Image/Spritesheet.png");
}


//Funktion setup (køre kode en gang)
function setup() {

  //Laver Canvas
  createCanvas(800, 800);

  //Funktioner som bliver kørt i setup()
  startposition();

  

  }



//Funktion draw (køre kode i et loop)  
  function draw() {
    let piecesLength = wPieces.length + bPieces.length;
    //Baground og stroke farves
    background(220);
    stroke(54);

    //Indsætter klassefunktioner
    
   
  
    //Laver spillebræt med linjer
    for (let i = 1; i <= 7; i++){
      line((width/8)*i,0,(width/8)*i, height);
      line(0,(height/8)*i,width,(height/8)*i)
     }
          
    for(let i = 0; i < bPieces.length; i++){
      bPieces[i].update();
      bPieces[i].visual(1);
      
    }
    for(let i = 0; i < wPieces.length; i++){
      wPieces[i].update();
      wPieces[i].visual(0);
      



    }



     //Finder musens koordinater og printer det til console
     positionX = int(map(mouseX,0,width,0,8));
     positionY = int(map(mouseY,0,height,0,8));
     //print(positionX + " " + positionY)
     

    //Spiller Skift
    spillerSkift();
    //print(spiller); 

  
    
  }



//Funktion som spawner alle brikkerne ved deres startlokation (Spillets Startopstilling)
function startposition (){



  wPieces.push(new Queen(3,0));
  bPieces.push(new Queen(3,7));

  wPieces.push(new King(4,0));
  bPieces.push(new King(4,7));

 for (let i = 0; i < 8 ; i++){

  if (i < 2){

    wPieces.push(new Rook(i*7,0));
    bPieces.push(new Rook(i*7,7));
  
    wPieces.push(new Knight(1+i*5,0));
    bPieces.push(new Knight(1+i*5,7));
  
    wPieces.push(new Bishop(2+i*3,0));
    bPieces.push(new Bishop(2+i*3,7));
  }
  
  wPieces.push(new Pawn(i,1));
  bPieces.push(new Pawn(i,6));

 }


}

function spillerSkift() {
//Spiler Boolean Variabel
let spiller = true;
let d = 5;

print(spiller);

  if (positionX == 7 && positionY == 7 && d == 5) {
  spiller = !spiller;
  
    if (spiller == false) {
      circle(200,200,50);
    }

    else {
      circle(400,400,150);
    }
  }
}


