//Globale variabler

//Boolean variabler
let pieceChosenNum = false;
let spillerSkiftNum = false;

let d;
let e;
let d2;
let e2;

//pieceChosen x og y variabler
let x;
let y;
let x2;
let y2;

//laver grid størrelse
let gridSize = 100; 

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

  //Farver de ternede felter
  push();
  //Light Ash Brown Farve
  fill(151,121,97);
  tileDark();
  pop();

  push();
  //Lighest Blorde Farve
  fill(233,206,166);
  tileLight();
  pop();

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
  winCheck();
  
 
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



//Funktion som kun køre koden når man venstreklikker på musen
function mousePressed() {
  
  //Boolean statement false (Vælger brikkens nuværende lokation)
  if (pieceChosenNum == false) {

    //Musens koordinater i forhold til Grid
    x2 = ceil(((mouseX)/width)*8);
    y2 = ceil(((mouseY)/height)*8);  

    //Printer x2 og y2 koordinater
    print("x2 = " + x2 + " y2 = " + y2);

    //Tjekker om der er en brik på musens lokation x2 og y2
    d = findIndex(wPieces,x2,y2);
    d2 = findIndex(bPieces,x2,y2);
    print(d,d2);

  }

  //Boolean statement true (vælger brikken nye lokation)
  if (pieceChosenNum == true) {

    //Musens koordinater i forhold til Grid
    x = ceil(((mouseX)/width)*8);
    y = ceil(((mouseY)/height)*8);

    //Printer x og y koordinater
    print("x = " + x + " y = " + y);
    

    //Tjekker om der er en brik på mussens lokation x og y

    //hvidt index
    for (let i = 0; i < wPieces.length; i++) {

      if((wPieces[i].x+gridSize)/gridSize == x && (wPieces[i].y+gridSize)/gridSize == y){
        //Angiver variablen e til at være lig med indexet af brikken
        e = i;
      }

    }

    //Sort index
    for (let i = 0; i < bPieces.length; i++){

      if((bPieces[i].x+gridSize)/gridSize == x && (bPieces[i].y+gridSize)/gridSize == y){
        //Angiver variablen e til at være lig med indexet af brikken
        e2 = i;
      }

    }

    //virker ikke 
    /*
    e = findIndex(wPieces,x,y);
    e2 = findIndex(bPieces,x,y);
    */
   
    //Hvid's tur
    if (spillerSkiftNum == false) {

      //Køre funktionen som giver de hvide pieces deres egenskaber (Herunder: King, Queen, Rook, Knight, Bishop og Pawn)    
      wPiecesEgenskaber(); 


      //KILL - Tjekker om nogle af de hvide brikker har slået en sort brik ihjel, vha. to for lykker
      for(let i = 0; i < wPieces.lenght; i++) {
        for (let j = 0; j < bPieces.length; j++) {
          if (wPieces[i].x == bPieces[j].x && wPieces[i].y == bPieces[j].y) {
            bPieces[j].y = bPieces[j].y + 800;
          }
        }
      }
      

      //Sørger for at man kun skifter spillertur, hvis man har flyttet en brik
      for(let i = 0; i < wPieces.length; i++) {
        if(x == (wPieces[i].x+gridSize)/gridSize && y == (wPieces[i].y+gridSize)/gridSize) {
          spillerSkiftNum = true;
        }
      }


      //Tjekker om to hvide brikker står oven i hinanden, hvis ja vil indexit gå fra 0-15 og hvis nej vil indexet være -1
        if(d > -1 && e > -1) {

          //Lad første brik stå
          wPieces[d].x = (x2*gridSize)-gridSize;
          wPieces[d].y = (y2*gridSize)-gridSize;
  
          //Lad anden brik stå
          wPieces[e].x = (x*gridSize)-gridSize;
          wPieces[e].y = (y*gridSize)-gridSize;
          
          //Nulstiller variablerne d og e til et tal som ikke er en del af brikkernes array
          d = -1;
          e = -1;
          
          //Ændre spileSkiftNum som er en boolean variable til den omvendte tilstand (Turen går ikke videre, hvis den if-statement er sant, da man tidligere ændre den samme boolean variabel's tilstand)
          spillerSkiftNum = !spillerSkiftNum;

        }

    }

    //Sort's tur
    if (spillerSkiftNum == true) {
      
      //Køre funktionen som giver de sorte pieces deres egenskaber (Herunder: King, Queen, Rook, Knight, Bishop og Pawn)    
      bPiecesEgenskaber(); 


      //KILL - Tjekker om nogle af de sorte brikker har slået en hvid brik ihjel, vha. to for lykker
      for (let i = 0; i < wPieces.length; i++) {
        for (let j = 0; j < bPieces.length; j++) {
          if (wPieces[i].x == bPieces[j].x && wPieces[i].y == bPieces[j].y) {
            wPieces[i].y = wPieces[i].y + 800;
          }
        }
      }


      //Sørger for at man kun skifter spillertur, hvis man har flyttet en brik
      for(let i = 0; i < bPieces.length; i++) {
        if(x == (bPieces[i].x+gridSize)/gridSize && y == (bPieces[i].y+gridSize)/gridSize) {
          spillerSkiftNum = false;
        }
      }


      //Tjekker om to sorte brikker står oven i hinanden, hvis ja vil indexit gå fra 0-15 og hvis nej vil indexet være -1
      if(d2 > -1 && e2 > -1) {

        //Lad første brik stå
        bPieces[d2].x = (x2*gridSize)-gridSize;
        bPieces[d2].y = (y2*gridSize)-gridSize;

        //Lad anden brik stå
        bPieces[e2].x = (x*gridSize)-gridSize;
        bPieces[e2].y = (y*gridSize)-gridSize;
        
        //Nulstiller variablerne d og e til et tal som ikke er en del af brikkernes array
        d2 = -1;
        e2 = -1;
        
        //Ændre spileSkiftNum som er en boolean variable til den omvendte tilstand (Turen går ikke videre, hvis den if-statement er sant, da man tidligere ændre den samme boolean variabel's tilstand)
        spillerSkiftNum = !spillerSkiftNum;

      }


    }

  }  

  //Ændre boolean variabel til den modsate tilstand (true -> false eller false -> true) 
  pieceChosenNum = !pieceChosenNum;
  print(spillerSkiftNum);
}



function winCheck() {

  //Tjekker om hvid vinder
  if (bPieces[0].y >= 800) {
    push();
    strokeWeight(10);
    stroke(0);
    fill(0,170,255);
    textFont("Georgia")
    textSize(100);
    textAlign(CENTER);
    text("HVID VINDER",width/2,height/2)
    pop()
  }

  //Tjekker om sort vinder
  if (wPieces[0].y >= 800) {
    push()
    strokeWeight(10);
    stroke(0);
    fill(0,170,255);
    textFont("Georgia")
    textSize(100);
    textAlign(CENTER);
    text("SORT VINDER",width/2,height/2)
    pop();
  }

}


//Funktion for de mørke ternet firkanter på brættet
function tileDark() {
  
  //Angiver tern koordinater
  let ternX = 0;
  let ternY = 0;

  //For loops som gør at felte bliver ternet
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      rect(ternX + 100+(200*j), ternY+(200*i),100);
    }
    
    for(let j = 0; j < 4; j++) {
      rect(ternX +(200*j), ternY+100+(200*i),100);
    }
  }
}

//Funktion for de mørke ternet firkanter på brættet
function tileLight() {

  //Angiver tern koordinater
  let ternX = 0;
  let ternY = 0;

  //For loops som gør at felte bliver ternet
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      rect(ternX +(200*j), ternY+(200*i),100);
    }
    
    for(let j = 0; j < 4; j++) {
      rect(ternX + 100+(200*j), ternY+100+(200*i),100);
    }
  }
}

  

//Funktion som giver alle de hvide pieces deres egenskaber (Herunder: King, Queen, Rook, Knight, Bishop og Pawn)
function wPiecesEgenskaber() { 
  for(let i = 0; i < wPieces.length; i++){
    if(wPieces[i].piece == 5.02){
      wPieces[i].Movement(x,x2,y,y2,1);

      
    }else{
      wPieces[i].Movement(x,x2,y,y2);
    }
  
  }   
}
function bPiecesEgenskaber() { 
  for(let i = 0; i < bPieces.length; i++){
    if(bPieces[i].piece == 5.02){
      bPieces[i].Movement(x,x2,y,y2,-1);

    }else{
      bPieces[i].Movement(x,x2,y,y2);
    }   
  }
}
function findIndex(colorPiece,varX,varY){
  let tempIndex = 0;

  for(let i = 0; i < colorPiece.length; i++){

    if((colorPiece[i].x+gridSize)/gridSize == varX && (colorPiece[i].y+gridSize)/gridSize == varY){
      //Angiver variablen d til at være lig med indexet af brikken
      tempIndex = i;
    }

  }

  return tempIndex;
}







