let positionX;


function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(220);

    
    stroke(54);
    for (let i = 1; i <= 7; i++){
        
         line((width/8)*i,0,(width/8)*i, height);
         line(0,(height/8)*i,width,(height/8)*i)
 
     }

     positionX = int(map(mouseX,0,width,0,7));

     print(positionX)


  }



