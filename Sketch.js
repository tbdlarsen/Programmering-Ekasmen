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

        whiteKing[i].visual(0,0);
        blackKing[i].visual(1,0);

        whiteQueens[i].visual(0,1);
        blackQueens[i].visual(1,1);

      }
      if (i < 2){

        whiteBishop[i].visual(0,2);
        blackBishop[i].visual(1,2);

        whiteKnigts[i].visual(0,3);
        blackKnigts[i].visual(1,3);

        whiteRooks[i].visual(0,4);
        blackRooks[i].visual(1,4);

      }

      whitePawns[i].visual(0,5);
      blackPawns[i].visual(1,5);

    }

    for (let i = 0; i < 2; i++){
      whiteRooks[i].visual(0,4);
      blackRooks[i].visual(1,4);

      whiteKnigts[i].visual(0,3);
      blackKnigts[i].visual(1,3);

    }


     //Finder musens koordinater og printer det til console
     positionX = int(map(mouseX,0,width,0,8));
     positionY = int(map(mouseY,0,height,0,8));
     print(positionX + " " + positionY)
     


     


  }
function startposition (){





for (let i = 0; i < 8; i++) {

  if (i < 1){

    //Dronninger
    whiteQueens[i] = new Queen(300,0);
    blackQueens[i] = new Queen(300,700);

    //Konger
    whiteKing[i] = new King(400,0);
    blackKing[i] = new King(400,700);

  }

  if (i < 2){

    //tårne
    whiteRooks[i] = new Rook(i*700,0);
    blackRooks[i] = new Rook(i*700,700);

    //heste
    whiteKnigts[i] = new Knight(100+i*500,0);
    blackKnigts[i] = new Knight(100+i*500,700);

    //løbere
    whiteBishop[i] = new Bishop(200+i*300,0);
    blackBishop[i] = new Bishop(200+i*300,700);

   
  }
  //bønder
  whitePawns[i] = new Pawn(100*i,100);
  blackPawns[i] = new Pawn(100*i,600);
}









}

