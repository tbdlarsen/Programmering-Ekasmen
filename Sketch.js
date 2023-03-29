//Globale variabler


//pieces


let whitePawns = [];
let blackPawns = [];

let whiteRooks =[];
let blackRooks = [];

let whiteKnigts = [];
let blackKnigts = [];

let whiteBishop = [];
let blackBishop = [];

let whiteQueens = [];
let blackQueens = [];

let whiteKing = [];
let blackKing = [];


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

      if (i < 1){

        whiteKing[i].visual(0);
        blackKing[i].visual(1);
        whiteKing[i].visual(0);
        blackKing[i].visual(1);

        whiteQueens[i].visual(0);
        blackQueens[i].visual(1);
        whiteQueens[i].visual(0);
        blackQueens[i].visual(1);

      }
      if (i < 2){

        whiteBishop[i].visual(0);
        blackBishop[i].visual(1);
        whiteBishop[i].visual(0);
        blackBishop[i].visual(1);

        whiteKnigts[i].visual(0);
        blackKnigts[i].visual(1);
        whiteKnigts[i].visual(0);
        blackKnigts[i].visual(1);

        whiteRooks[i].visual(0);
        blackRooks[i].visual(1);
        whiteRooks[i].visual(0);
        blackRooks[i].visual(1);

      }

      whitePawns[i].visual(0);
      blackPawns[i].visual(1);
      whitePawns[i].visual(0);
      blackPawns[i].visual(1);

    }


     //Finder musens koordinater og printer det til console
     positionX = int(map(mouseX,0,width,0,8));
     positionY = int(map(mouseY,0,height,0,8));
     print(positionX + " " + positionY)
     


     


  }




function startposition (){

for (let i = 0; i < 8; i++) {
   //bønder
   whitePawns[i] = new Pawn(100*i,100);
   blackPawns[i] = new Pawn(100*i,600);
   
  if (i < 1){

    //Dronninger
    whiteQueens[i] = new Queen(3,0);
    blackQueens[i] = new Queen(3,7);

    //Konger
    whiteKing[i] = new King(4,0);
    blackKing[i] = new King(4,7);

  }

  if (i < 2){

    //tårne
    whiteRooks[i] = new Rook(i*7,0);
    blackRooks[i] = new Rook(i*7,7);

    //heste
    whiteKnigts[i] = new Knight(1+i*5,0);
    blackKnigts[i] = new Knight(1+i*5,7);

    //løbere
    whiteBishop[i] = new Bishop(2+i*3,0);
    blackBishop[i] = new Bishop(2+i*3,7);

   
  }
  //bønder
  whitePawns[i] = new Pawn(1*i,1);
  blackPawns[i] = new Pawn(1*i,6);
}


}

