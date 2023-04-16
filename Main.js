//Globale variabler

//Laver to arrays som indeholder de sorte og hvide Pieces
let wPieces = [];
let bPieces = [];

//Angiver Spritesheet variabel
let spritesheet;

//Mouse position
let positionX;
let positionY;

let num = false;

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
  wPieces.push(new King(4,0));
  bPieces.push(new King(4,7));

  //Queen
  wPieces.push(new Queen(3,0));
  bPieces.push(new Queen(3,7));

  for (let i = 0; i < 8 ; i++){
    if (i < 2){
      //Rook
      wPieces.push(new Rook(i*7,0));
      bPieces.push(new Rook(i*7,7));
      
      //Knight
      wPieces.push(new Knight(1+i*5,0));
      bPieces.push(new Knight(1+i*5,7));
      
      //Bishop
      wPieces.push(new Bishop(2+i*3,0));
      bPieces.push(new Bishop(2+i*3,7));
  }
  
  //Pawn
  wPieces.push(new Pawn(i,1));
  bPieces.push(new Pawn(i,6));
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

function mouseClicked(){
  
  
      

  if (num == false){
    xCord = floor((mouseX/width)*8);
    yCord = floor((mouseY/height)*8);
    print(num);
    
  }

  if (num == true){
    newxCord = floor((mouseX/width)*8);
    newyCord = floor((mouseY/height)*8);
  
    print (num);
  
    moveX = newxCord-xCord;
    moveY = newyCord-yCord;
  
    print ("move " + moveX,moveY);
  }

  









 num = !num
  



}





