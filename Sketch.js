//Globale variabler
let pawn;
let positionX;
let positionY;
let spritesheet;

//Preloader spritesheet så det klar til brug.
function preload() {
  spritesheet = loadImage("Image/Spritesheet.png");
}


//Funktion setup (køre kode en gang)
function setup() {
  createCanvas(800, 800);
  //Skaber en ny bonde
  pawn = new Pawn(100,100);  

  }

//Funktion draw (køre kode i et loop)  
  function draw() {
    background(220);
    stroke(54);

    //Indsætter klassefunktioner
    pawn.visual();

    //Laver spillebræt med linjer
    for (let i = 1; i <= 7; i++){
      line((width/8)*i,0,(width/8)*i, height);
      line(0,(height/8)*i,width,(height/8)*i)
     }
          
     //Finder musens koordinater og printer det til console
     positionX = int(map(mouseX,0,width,0,8));
     positionY = int(map(mouseY,0,height,0,8));
     print(positionX + " " + positionY)
     


     


  }


