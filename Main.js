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
    for (let i = 0; i < 16; i++) {
      //Finder indixet til brikken, som har musens lokation x2 og y2 

      //Hvidt index
      if((wPieces[i].x+gridSize)/gridSize == x2 && (wPieces[i].y+gridSize)/gridSize == y2){
        //Angiver variablen d til at være lig med indexet af brikken
        d = i;
      }

      //Sort index
      if((bPieces[i].x+gridSize)/gridSize == x2 && (bPieces[i].y+gridSize)/gridSize == y2){
        //Angiver variablen d til at være lig med indexet af brikken
        d2 = i;
      }
    }

  }

  //Boolean statement true (vælger brikken nye lokation)
  if (pieceChosenNum == true) {

    //Musens koordinater i forhold til Grid
    x = ceil(((mouseX)/width)*8);
    y = ceil(((mouseY)/height)*8);

    //Printer x og y koordinater
    print("x = " + x + " y = " + y);

    //Tjekker om der er en brik på mussens lokation x og y
    for (let i = 0; i < 16; i++) {
      //Finder indixet til brikken, som har musens lokation x og y 

      //Hvidt index
      if((wPieces[i].x+gridSize)/gridSize == x && (wPieces[i].y+gridSize)/gridSize == y){
        //Angiver variablen e til at være lig med indexet af brikken
        e = i;
      }

      //Sort index
      if((bPieces[i].x+gridSize)/gridSize == x && (bPieces[i].y+gridSize)/gridSize == y){
        //Angiver variablen e til at være lig med indexet af brikken
        e2 = i;
      }
    }
    

    //Hvid's tur
    if (spillerSkiftNum == false) {

      //Køre funktionen som giver de hvide pieces deres egenskaber (Herunder: King, Queen, Rook, Knight, Bishop og Pawn)    
      wPiecesEgenskaber(); 


      //KILL - Tjekker om nogle af de hvide brikker har slået en sort brik ihjel, vha. to for lykker
      for(let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
          if (wPieces[i].x == bPieces[j].x && wPieces[i].y == bPieces[j].y) {
            bPieces[j].y = bPieces[j].y + 800;
          }
        }
      }
      

      //Sørger for at man kun skifter spillertur, hvis man har flyttet en brik
      for(let i = 0; i < 16; i++) {
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
      for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
          if (wPieces[i].x == bPieces[j].x && wPieces[i].y == bPieces[j].y) {
            wPieces[i].y = wPieces[i].y + 800;
          }
        }
      }


      //Sørger for at man kun skifter spillertur, hvis man har flyttet en brik
      for(let i = 0; i < 16; i++) {
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

}



//Funktion som giver alle de hvide pieces deres egenskaber (Herunder: King, Queen, Rook, Knight, Bishop og Pawn)
function wPiecesEgenskaber() {

//King - Mulige bevægelser 
      
      



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
    for(let i = 0; i < wPieces.length; i++){

      //movement for konge
      if(wPieces[i].piece == 0.025){
        console.log(wPieces[i].piece);
        wPieces[i].movement(x,x2,y,y2);
      }

      //movement for tårn
      if(wPieces[i].piece == 4.025){
        console.log(wPieces[i].piece);
        wPieces[i].Movement(x,x2,y,y2);
      }

      //movement for pawn
      if(wPieces[i].piece ==5.02){
        console.log(wPieces[i].piece);
        wPieces[i].Movement(x,x2,y,y2);
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


    
    
}



//Funktion som giver alle de hvide pieces deres egenskaber (Herunder: King, Queen, Rook, Knight, Bishop og Pawn)
function bPiecesEgenskaber() {

  //King - Mulige bevægelser 
      
       //1:8 (NV)
       if((bPieces[0].x + 100)/100 == x2 && (bPieces[0].y + 100)/100 == y2 && x2-x == 1 && y2-y == -1) {
        bPieces[0].x = bPieces[0].x - 100;
        bPieces[0].y = bPieces[0].y + 100; 
      }

      //2:8 (N)
      if((bPieces[0].x + 100)/100 == x2 && (bPieces[0].y + 100)/100 == y2 && x2-x == 0 && y2-y == -1) {
        bPieces[0].x = bPieces[0].x;
        bPieces[0].y = bPieces[0].y + 100; 
      }

      //3:8 (NØ)
      if((bPieces[0].x + 100)/100 == x2 && (bPieces[0].y + 100)/100 == y2 && x2-x == -1 && y2-y == -1) {
        bPieces[0].x = bPieces[0].x + 100;
        bPieces[0].y = bPieces[0].y + 100; 
      }

      //4:8 (V)
      if((bPieces[0].x + 100)/100 == x2 && (bPieces[0].y + 100)/100 == y2 && x2-x == 1 && y2-y == 0) {
        bPieces[0].x = bPieces[0].x - 100;
        bPieces[0].y = bPieces[0].y; 
      }

      //5:8 (Ø)
      if((bPieces[0].x + 100)/100 == x2 && (bPieces[0].y + 100)/100 == y2 && x2-x == -1 && y2-y == 0) {
        bPieces[0].x = bPieces[0].x + 100;
        bPieces[0].y = bPieces[0].y; 
      }

      //6:8 (SV)
      if((bPieces[0].x + 100)/100 == x2 && (bPieces[0].y + 100)/100 == y2 && x2-x == 1 && y2-y == 1) {
        bPieces[0].x = bPieces[0].x - 100;
        bPieces[0].y = bPieces[0].y - 100; 
      }

      //7:8 (S)
      if((bPieces[0].x + 100)/100 == x2 && (bPieces[0].y + 100)/100 == y2 && x2-x == 0 && y2-y == 1) {
        bPieces[0].x = bPieces[0].x;
        bPieces[0].y = bPieces[0].y -100; 
      }

      //8:8 (SØ)
      if((bPieces[0].x + 100)/100 == x2 && (bPieces[0].y + 100)/100 == y2 && x2-x == -1 && y2-y == 1) {
        bPieces[0].x = bPieces[0].x + 100;
        bPieces[0].y = bPieces[0].y - 100; 
      }



    //Queen - Mulige bevægelser 
      
      //1:8 (NV)
      if((bPieces[1].x + 100)/100 == x2 && (bPieces[1].y + 100)/100 == y2 && x2-x >= 1 && y2-y <= -1 && (x2-x)/(y2-y) == -1) {
        bPieces[1].x = bPieces[1].x - (x2-x)*100;
        bPieces[1].y = bPieces[1].y - (y2-y)*100; 
      }

      //2:8 (N)
      if((bPieces[1].x + 100)/100 == x2 && (bPieces[1].y + 100)/100 == y2 && x2-x == 0 && y2-y <= -1) {
        bPieces[1].x = bPieces[1].x - (x2-x)*100;
        bPieces[1].y = bPieces[1].y - (y2-y)*100; 
      }

      //3:8 (NØ)
      if((bPieces[1].x + 100)/100 == x2 && (bPieces[1].y + 100)/100 == y2 && x2-x <= -1 && y2-y <= -1 && (x2-x)/(y2-y) == 1) {
        bPieces[1].x = bPieces[1].x - (x2-x)*100;
        bPieces[1].y = bPieces[1].y - (y2-y)*100; 
      }

      //4:8 (V)
      if((bPieces[1].x + 100)/100 == x2 && (bPieces[1].y + 100)/100 == y2 && x2-x >= 1 && y2-y == 0) {
        bPieces[1].x = bPieces[1].x - (x2-x)*100;
        bPieces[1].y = bPieces[1].y - (y2-y)*100; 
      }
      
      //5:8 (Ø)
      if((bPieces[1].x + 100)/100 == x2 && (bPieces[1].y + 100)/100 == y2 && x2-x <= -1 && y2-y == 0) {
        bPieces[1].x = bPieces[1].x - (x2-x)*100;
        bPieces[1].y = bPieces[1].y - (y2-y)*100; 
      }

      //6:8 (SV)
      if((bPieces[1].x + 100)/100 == x2 && (bPieces[1].y + 100)/100 == y2 && x2-x >= -1 && y2-y >= 1 && (x2-x)/(y2-y) == 1) {
        bPieces[1].x = bPieces[1].x - (x2-x)*100;
        bPieces[1].y = bPieces[1].y - (y2-y)*100; 
      }

      //7:8 (S)
      if((bPieces[1].x + 100)/100 == x2 && (bPieces[1].y + 100)/100 == y2 && x2-x == 0 && y2-y >= 1) {
        bPieces[1].x = bPieces[1].x - (x2-x)*100;
        bPieces[1].y = bPieces[1].y - (y2-y)*100; 
      }

      //8:8 (SØ)
      if((bPieces[1].x + 100)/100 == x2 && (bPieces[1].y + 100)/100 == y2 && x2-x <= 1 && y2-y >= 1 && (x2-x)/(y2-y) == -1) {
        bPieces[1].x = bPieces[1].x - (x2-x)*100;
        bPieces[1].y = bPieces[1].y - (y2-y)*100; 
      }


    //Rook - Mulige bevægelser 
    for(let i = 2; i < 4; i++){

      //1:4 (N)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == 0 && y2-y <= -1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //2:4 (V)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x >= 1 && y2-y == 0) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }
      
      //3:4 (Ø)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x <= -1 && y2-y == 0) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //4:4 (S)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == 0 && y2-y >= 1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }
    }



    //Knight - Mulige bevægelser 
    for(let i = 4; i < 6; i++){

      //1:8 (N:V)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == 1 && y2-y == -2) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //2:8 (N:Ø)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == -1 && y2-y == -2) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //3:8 (V:N)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == 2 && y2-y == 1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //4:8 (V:S)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == 2 && y2-y == -1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //5:8 (Ø:N)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == -2 && y2-y == 1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //6:8 (Ø:S)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == -2 && y2-y == -1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //7:8 (S:V)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == 1 && y2-y == 2) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //8:8 (S:Ø)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == -1 && y2-y == 2) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }
    }



    //Bishop - Mulige bevægelser 
    for(let i = 6; i < 8; i++){
      
      //1:4 (NV)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x >= 1 && y2-y <= -1 && (x2-x)/(y2-y) == -1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //2:4 (NØ)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x <= -1 && y2-y <= -1 && (x2-x)/(y2-y) == 1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //3:4 (SV)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x >= -1 && y2-y >= 1 && (x2-x)/(y2-y) == 1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }

      //4:4 (SØ)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x <= 1 && y2-y >= 1 && (x2-x)/(y2-y) == -1) {
        bPieces[i].x = bPieces[i].x - (x2-x)*100;
        bPieces[i].y = bPieces[i].y - (y2-y)*100; 
      }
    }


    
    //Pawn - Mulige bevægelser
      
    for(let i = 8; i < 16; i++){
      //1:2 (S + 1)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == 0 && y2-y == 1) {
        bPieces[i].x = bPieces[i].x;
        bPieces[i].y = bPieces[i].y - 100; 
      }

      //2:2 (S + 2)
      if((bPieces[i].x + 100)/100 == x2 && (bPieces[i].y + 100)/100 == y2 && x2-x == 0 && y2-y == 2) {
        bPieces[i].x = bPieces[i].x;
        bPieces[i].y = bPieces[i].y - 200; 
      }
    }
}
