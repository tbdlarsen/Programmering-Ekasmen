//Globale variabler

//Boolean variabler
pieceChosenNum = false;

//pieceChosen x og y variabler
let x;
let y;
let x2;
let y2;


//Laver to arrays som indeholder de sorte og hvide Pieces
let wPieces = [];
let bPieces = [];

//Angiver Spritesheet variabel
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
    
  //Baground og stroke farves
  background(220);
  stroke(54);

  //Laver spillebræt med linjer
  for (let i = 1; i <= 7; i++){
    line((width/8)*i,0,(width/8)*i, height);
    line(0,(height/8)*i,width,(height/8)*i)
  }
    

  //For loop som viser alle de sorte Pieces, samt at den print
  for(let i = 0; i < bPieces.length; i++){
    bPieces[i].update();
    bPieces[i].visual(1);
  }

  //For loop som viser alle de hvide Pieces, samt at den Grid
  for(let i = 0; i < wPieces.length; i++){
    wPieces[i].update();
    wPieces[i].visual(0);
  }


  //Finder musens koordinater og printer det til console
  positionX = int(map(mouseX,0,width,0,8));
  positionY = int(map(mouseY,0,height,0,8));
  //print(positionX + " " + positionY)
    
     
  //Funktioner som bliver kørt i draw()
  spillerSkift(); 
 
}



//Funktion som spawner alle brikkerne ved deres startlokation (Spillets Startopstilling)
function startposition (){

  //Pusher de hvide pieces ind i arrayet med de hvide pieces og pusher de sorte pieces ind i arrayet med sorte pieces (Herunder: King, Queen, Rook, Knight, Bishop og Pawn)
  
  //King
  wPieces.push(new King(4,0)); //wPieces[0]
  bPieces.push(new King(4,7)); //bPieces[0]

  //Queen
  wPieces.push(new Queen(3,0)); //wPieces[1]
  bPieces.push(new Queen(3,7)); //bPieces[1]

  //Rook
  for (let i = 0; i < 2 ; i++){
    if (i < 2){
      wPieces.push(new Rook(i*7,0)); //wPieces[2], wPieces[3] 
      bPieces.push(new Rook(i*7,7)); //bPieces[2], wPieces[4]
    }
  }    
  
  //Knight
  for (let i = 0; i < 2 ; i++){
    if (i < 2){
      wPieces.push(new Knight(1+i*5,0)); //wPieces[4], wPieces[5] 
      bPieces.push(new Knight(1+i*5,7)); //bPieces[4], wPieces[5]
      
   }
  }

  //Bishop
  for (let i = 0; i < 2 ; i++){
    if (i < 2){
      wPieces.push(new Bishop(2+i*3,0)); //wPieces[6], wPieces[7] 
      bPieces.push(new Bishop(2+i*3,7)); //bPieces[6], bPieces[7] 
    }
  }

  //Pawn
  for (let i = 0; i < 8 ; i++){
    if (i < 8){
    wPieces.push(new Pawn(i,1)); //wPieces[8..15]
    bPieces.push(new Pawn(i,6)); //bPieces[8..15] 
    }
  }
    
}


//Funktion som har til formål at skifte tur mellem to spillere (skifter tur til næste spiller når brik er flyttet)
function spillerSkift() {

  //Spiler Boolean Variabel
  let spiller = true;
  let d = 5;

  //Midlertidig spillerskifte, hvilket er markeret med en cirkel - Boolean if statements
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

function mousePressed() {
  
  if (pieceChosenNum == false) {
    x2 = ceil(((mouseX)/width)*8);
    y2 = ceil(((mouseY)/height)*8);  

    print("x2 = " + x2 + " y2 = " + y2);

  }

  if (pieceChosenNum == true) {
    x = ceil(((mouseX)/width)*8);
    y = ceil(((mouseY)/height)*8);

    print("x = " + x + " y = " + y);
      
    //King - Mulige bevægelser 
      
      //1:8 (NV)
      if((wPieces[0].x + 100)/100 == x2 && (wPieces[0].y + 100)/100 == y2 && x2-x == 1 && y2-y == 1) {
        wPieces[0].x = wPieces[0].x - 100;
        wPieces[0].y = wPieces[0].y - 100; 
      }

      //2:8 (N)
      if((wPieces[0].x + 100)/100 == x2 && (wPieces[0].y + 100)/100 == y2 && x2-x == 0 && y2-y == 1) {
        wPieces[0].x = wPieces[0].x;
        wPieces[0].y = wPieces[0].y -100; 
      }

      //3:8 (NØ)
      if((wPieces[0].x + 100)/100 == x2 && (wPieces[0].y + 100)/100 == y2 && x2-x == -1 && y2-y == 1) {
        wPieces[0].x = wPieces[0].x + 100;
        wPieces[0].y = wPieces[0].y - 100; 
      }

      //4:8 (V)
      if((wPieces[0].x + 100)/100 == x2 && (wPieces[0].y + 100)/100 == y2 && x2-x == 1 && y2-y == 0) {
        wPieces[0].x = wPieces[0].x - 100;
        wPieces[0].y = wPieces[0].y; 
      }

      //5:8 (Ø)
      if((wPieces[0].x + 100)/100 == x2 && (wPieces[0].y + 100)/100 == y2 && x2-x == -1 && y2-y == 0) {
        wPieces[0].x = wPieces[0].x + 100;
        wPieces[0].y = wPieces[0].y; 
      }

      //6:8 (SV)
      if((wPieces[0].x + 100)/100 == x2 && (wPieces[0].y + 100)/100 == y2 && x2-x == 1 && y2-y == -1) {
        wPieces[0].x = wPieces[0].x - 100;
        wPieces[0].y = wPieces[0].y + 100; 
      }

      //7:8 (S)
      if((wPieces[0].x + 100)/100 == x2 && (wPieces[0].y + 100)/100 == y2 && x2-x == 0 && y2-y == -1) {
        wPieces[0].x = wPieces[0].x;
        wPieces[0].y = wPieces[0].y + 100; 
      }

      //8:8 (SØ)
      if((wPieces[0].x + 100)/100 == x2 && (wPieces[0].y + 100)/100 == y2 && x2-x == -1 && y2-y == -1) {
        wPieces[0].x = wPieces[0].x + 100;
        wPieces[0].y = wPieces[0].y + 100; 
      }



    //Queen - Mulige bevægelser 
      
      //1:8 (NV)
      if((wPieces[1].x + 100)/100 == x2 && (wPieces[1].y + 100)/100 == y2 && x2-x >= -1 && y2-y >= 1 && (x2-x)/(y2-y) == 1) {
        wPieces[1].x = wPieces[1].x - (x2-x)*100;
        wPieces[1].y = wPieces[1].y - (y2-y)*100; 
      }

      //2:8 (N)
      if((wPieces[1].x + 100)/100 == x2 && (wPieces[1].y + 100)/100 == y2 && x2-x == 0 && y2-y >= 1) {
        wPieces[1].x = wPieces[1].x - (x2-x)*100;
        wPieces[1].y = wPieces[1].y - (y2-y)*100; 
      }

      //3:8 (NØ)
      if((wPieces[1].x + 100)/100 == x2 && (wPieces[1].y + 100)/100 == y2 && x2-x <= 1 && y2-y >= 1 && (x2-x)/(y2-y) == -1) {
        wPieces[1].x = wPieces[1].x - (x2-x)*100;
        wPieces[1].y = wPieces[1].y - (y2-y)*100; 
      }

      //4:8 (V)
      if((wPieces[1].x + 100)/100 == x2 && (wPieces[1].y + 100)/100 == y2 && x2-x >= 1 && y2-y == 0) {
        wPieces[1].x = wPieces[1].x - (x2-x)*100;
        wPieces[1].y = wPieces[1].y - (y2-y)*100; 
      }
      
      //5:8 (Ø)
      if((wPieces[1].x + 100)/100 == x2 && (wPieces[1].y + 100)/100 == y2 && x2-x <= -1 && y2-y == 0) {
        wPieces[1].x = wPieces[1].x - (x2-x)*100;
        wPieces[1].y = wPieces[1].y - (y2-y)*100; 
      }

      //6:8 (SV)
      if((wPieces[1].x + 100)/100 == x2 && (wPieces[1].y + 100)/100 == y2 && x2-x >= 1 && y2-y <= -1 && (x2-x)/(y2-y) == -1) {
        wPieces[1].x = wPieces[1].x - (x2-x)*100;
        wPieces[1].y = wPieces[1].y - (y2-y)*100; 
      }

      //7:8 (S)
      if((wPieces[1].x + 100)/100 == x2 && (wPieces[1].y + 100)/100 == y2 && x2-x == 0 && y2-y <= -1) {
        wPieces[1].x = wPieces[1].x - (x2-x)*100;
        wPieces[1].y = wPieces[1].y - (y2-y)*100; 
      }

      //8:8 (SØ)
      if((wPieces[1].x + 100)/100 == x2 && (wPieces[1].y + 100)/100 == y2 && x2-x <= -1 && y2-y <= -1 && (x2-x)/(y2-y) == 1) {
        wPieces[1].x = wPieces[1].x - (x2-x)*100;
        wPieces[1].y = wPieces[1].y - (y2-y)*100; 
      }
    


    //Rook - Mulige bevægelser 
    for(let i = 2; i < 4; i++){

      //1:4 (N)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == 0 && y2-y >= 1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //2:4 (V)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x >= 1 && y2-y == 0) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }
      
      //3:4 (Ø)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x <= -1 && y2-y == 0) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //4:4 (S)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == 0 && y2-y <= -1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }
    }



    //Knight - Mulige bevægelser 
    for(let i = 4; i < 6; i++){

      //1:8 (N:V)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == 1 && y2-y == 2) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //2:8 (N:Ø)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == -1 && y2-y == 2) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //3:8 (V:N)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == 2 && y2-y == 1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //4:8 (V:S)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == 2 && y2-y == -1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //5:8 (Ø:N)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == -2 && y2-y == 1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //6:8 (Ø:S)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == -2 && y2-y == -1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //7:8 (S:V)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == 1 && y2-y == -2) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //8:8 (S:Ø)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == -1 && y2-y == -2) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

    }



    //Bishop - Mulige bevægelser 
    for(let i = 6; i < 8; i++){
      
      //4:4 (NV)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x >= -1 && y2-y >= 1 && (x2-x)/(y2-y) == 1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //4:4 (NØ)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x <= 1 && y2-y >= 1 && (x2-x)/(y2-y) == -1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //4:4 (SV)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x >= 1 && y2-y <= -1 && (x2-x)/(y2-y) == -1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }

      //4:4 (SØ)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x <= -1 && y2-y <= -1 && (x2-x)/(y2-y) == 1) {
        wPieces[i].x = wPieces[i].x - (x2-x)*100;
        wPieces[i].y = wPieces[i].y - (y2-y)*100; 
      }
    }


    
    //Pawn - Mulige bevægelser
      
    for(let i = 8; i < 16; i++){
      //1:2 (S + 1)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == 0 && y2-y == -1) {
        wPieces[i].x = wPieces[i].x;
        wPieces[i].y = wPieces[i].y + 100; 
      }

      //2:2 (S + 2)
      if((wPieces[i].x + 100)/100 == x2 && (wPieces[i].y + 100)/100 == y2 && x2-x == 0 && y2-y == -2) {
        wPieces[i].x = wPieces[i].x;
        wPieces[i].y = wPieces[i].y + 200; 
      }
    }



  } 

  pieceChosenNum = !pieceChosenNum;
}

